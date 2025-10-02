import formData from "form-data";
import Mailgun from "mailgun.js";
import busboy from "busboy";

export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: "Method Not Allowed" };
  }

  try {
    const bb = busboy({
      headers: { "content-type": event.headers["content-type"] },
    });

    const fields = {};
    let fileData = null;

    await new Promise((resolve, reject) => {
      const chunks = [];

      bb.on("field", (name, val) => {
        fields[name] = val;
      });

      bb.on("file", (name, stream, info) => {
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("end", () => {
          fileData = {
            filename: info.filename,
            data: Buffer.concat(chunks),
            contentType: info.mimeType,
          };
        });
      });

      bb.on("close", resolve);
      bb.on("error", reject);

      // Netlify sends body as base64
      bb.end(Buffer.from(event.body, "base64"));
    });

    if (!fields.name || !fields.email || !fields.message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY, // must be set in Netlify env vars
    });

    const messageData = {
      from: `${fields.name} <${fields.email}>`,
      to: "contact@githubtechnologies.com", // change to your receiving email
      subject: fields.subject || "New message from contact form",
      text: `
        Name: ${fields.name}
        Email: ${fields.email}
        Company: ${fields.company || "N/A"}
        Subject: ${fields.subject || "No subject"}

        Message:
        ${fields.message}
      `,
    };

    if (fileData) {
      messageData.attachment = new mg.Attachment({
        data: fileData.data,
        filename: fileData.filename,
        contentType: fileData.contentType,
      });
    }

    await mg.messages.create(process.env.MAILGUN_DOMAIN, messageData);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Send email error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
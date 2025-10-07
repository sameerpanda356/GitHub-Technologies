import Mailgun from "mailgun.js";
import formData from "form-data";
import Busboy from "busboy";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  return new Promise((resolve) => {
    try {
      const busboy = Busboy({ headers: event.headers });
      const fields = {};
      let fileBuffer = null;
      let fileName = "";
      let fileType = "";

      // ✅ Handle file stream properly
      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        const chunks = [];
        file.on("data", (data) => chunks.push(data));
        file.on("end", () => {
          fileBuffer = Buffer.concat(chunks);
          fileName = filename;
          fileType = mimetype;
        });
      });

      busboy.on("field", (fieldname, val) => {
        fields[fieldname] = val;
      });

      busboy.on("finish", async () => {
        try {
          const msgData = {
            from: `${fields.name || "Website User"} <${fields.email || "no-reply@site.com"}>`,
            to: "contact@githubtechnologies.com",
            subject: `Contact Form: ${fields.subject || "New Submission"}`,
            text: `${fields.message || "(no message)"}\n\nFrom: ${fields.name}\nCompany: ${fields.company}\nEmail: ${fields.email}`,
          };

          if (fileBuffer && fileName) {
            msgData.attachment = [
              {
                filename: fileName,
                data: fileBuffer,
                contentType: fileType || "application/octet-stream",
              },
            ];
          }

          console.log("📩 Sending via Mailgun:", {
            from: msgData.from,
            subject: msgData.subject,
            hasAttachment: !!fileBuffer,
            fileName,
            fileType,
            size: fileBuffer ? fileBuffer.length : 0,
          });

          await mg.messages.create(process.env.MAILGUN_DOMAIN, msgData);

          resolve({
            statusCode: 200,
            body: JSON.stringify({
              message: "Email sent successfully!",
              attachment: !!fileBuffer ? fileName : "none",
            }),
          });
        } catch (error) {
          console.error("❌ Mailgun send error:", error);
          resolve({
            statusCode: 500,
            body: JSON.stringify({
              error: "Error sending email via Mailgun",
              details: error.message,
            }),
          });
        }
      });

      busboy.end(Buffer.from(event.body, "base64"));
    } catch (err) {
      console.error("❌ Parsing error:", err);
      resolve({
        statusCode: 500,
        body: JSON.stringify({ error: "Error parsing form data" }),
      });
    }
  });
};

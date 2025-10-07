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
      let attachmentBuffer = null;
      let attachmentFilename = "";
      let attachmentMimeType = "";

      // ✅ Capture file stream
      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        const chunks = [];
        file.on("data", (data) => chunks.push(data));
        file.on("end", () => {
          try {
            attachmentBuffer = Buffer.concat(chunks);
            attachmentFilename = filename;
            attachmentMimeType = mimetype;
          } catch (err) {
            console.error("⚠️ Attachment parse error:", err);
            attachmentBuffer = null;
          }
        });
      });

      // ✅ Capture text fields
      busboy.on("field", (fieldname, val) => {
        fields[fieldname] = val;
      });

      // ✅ When parsing finishes
      busboy.on("finish", async () => {
        try {
          const msgData = {
            from: `${fields.name || "Website User"} <${fields.email || "no-reply@site.com"}>`,
            to: "contact@githubtechnologies.com",
            subject: `Contact Form: ${fields.subject || "New Submission"}`,
            text: `${fields.message || "(no message)"}\n\nFrom: ${fields.name}\nCompany: ${fields.company}\nEmail: ${fields.email}`,
          };

          // ✅ Safe attachment handling
          if (attachmentBuffer && attachmentFilename) {
            try {
              msgData.attachment = [
                {
                  data: attachmentBuffer,
                  filename: attachmentFilename,
                  contentType: attachmentMimeType,
                },
              ];
            } catch (err) {
              console.warn("⚠️ Skipping attachment due to processing error:", err.message);
            }
          }

          console.log("📩 Sending via Mailgun:", {
            from: msgData.from,
            to: msgData.to,
            subject: msgData.subject,
            hasAttachment: !!attachmentBuffer,
            attachmentInfo: attachmentBuffer
              ? { filename: attachmentFilename, contentType: attachmentMimeType }
              : "none",
          });

          // ✅ Send via Mailgun
          await mg.messages.create(process.env.MAILGUN_DOMAIN, msgData);

          resolve({
            statusCode: 200,
            body: JSON.stringify({
              message: "Email sent successfully!",
              attachment: !!attachmentBuffer ? attachmentFilename : "none",
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

      // ✅ Parse multipart form data
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

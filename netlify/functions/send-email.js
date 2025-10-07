import Mailgun from "mailgun.js";
import formData from "form-data";
import Busboy from "busboy";

// ✅ Initialize Mailgun client
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY, // Set in Netlify environment variables
});

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  return new Promise((resolve) => {
    try {
      const busboy = Busboy({
        headers: event.headers,
      });

      const fields = {};
      let attachmentBuffer = null;
      let attachmentInfo = {};

      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        const chunks = [];
        file.on("data", (data) => chunks.push(data));
        file.on("end", () => {
          attachmentBuffer = Buffer.concat(chunks);
          attachmentInfo = { filename, mimetype };
        });
      });

      busboy.on("field", (fieldname, val) => {
        fields[fieldname] = val;
      });

      busboy.on("finish", async () => {
        try {
          console.log("📨 Parsed form fields:", fields);
          if (attachmentBuffer) {
            console.log(`📎 Attachment received: ${attachmentInfo.filename}`);
          }

          // ✅ Prepare email
          const msgData = {
            from: `${fields.name || "Website User"} <${fields.email || "no-reply@githubtechnologies.com"}>`,
            to: "contact@githubtechnologies.com",
            subject: `📬 ${fields.subject || "Website Inquiry"}`,
            text: `
New contact form submission:

Name: ${fields.name}
Email: ${fields.email}
Company: ${fields.company || "N/A"}
Subject: ${fields.subject}
Message:
${fields.message}

---
Submitted from GitHub Technologies website.
`,
          };

          // ✅ Add attachment if exists
          if (attachmentBuffer) {
            msgData.attachment = new mg.Attachment({
              data: attachmentBuffer,
              filename: attachmentInfo.filename,
              contentType: attachmentInfo.mimetype,
            });
          }

          // ✅ Send using Mailgun
          await mg.messages.create(process.env.MAILGUN_DOMAIN, msgData);

          console.log("✅ Email sent successfully!");
          resolve({
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully!" }),
          });
        } catch (err) {
          console.error("❌ Mailgun send error:", err);
          resolve({
            statusCode: 500,
            body: JSON.stringify({ error: "Error sending email via Mailgun" }),
          });
        }
      });

      // ✅ Parse incoming form
      busboy.end(Buffer.from(event.body, "base64"));
    } catch (err) {
      console.error("❌ Busboy parse error:", err);
      resolve({
        statusCode: 500,
        body: JSON.stringify({ error: "Error parsing form data" }),
      });
    }
  });
};
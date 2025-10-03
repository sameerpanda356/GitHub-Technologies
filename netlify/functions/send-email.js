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

  return new Promise((resolve, reject) => {
    try {
      const busboy = Busboy({ headers: event.headers });
      const fields = {};
      let attachment = null;

      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
        const chunks = [];
        file.on("data", (data) => chunks.push(data));
        file.on("end", () => {
          attachment = {
            filename,
            data: Buffer.concat(chunks),
            contentType: mimetype,
          };
        });
      });

      busboy.on("field", (fieldname, val) => {
        fields[fieldname] = val;
      });

      busboy.on("finish", async () => {
        try {
          const msgData = {
            from: `${fields.name} <${fields.email}>`,
            to: "contact@githubtechnologies.com",
            subject: `Contact Form: ${fields.subject || "New Submission"}`,
            text: `${fields.message}\n\nFrom: ${fields.name}\nCompany: ${fields.company}\nEmail: ${fields.email}`,
            attachment: attachment
              ? new mg.formData.File([attachment.data], attachment.filename, {
                type: attachment.contentType,
                })
              : undefined,
          };

          await mg.messages.create(process.env.MAILGUN_DOMAIN, msgData);

          resolve({
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully!" }),
          });
        } catch (error) {
          console.error("Mailgun error:", error);
          resolve({
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
          });
        }
      });

      busboy.end(Buffer.from(event.body, "base64"));
    } catch (err) {
      console.error("Parsing error:", err);
      resolve({ statusCode: 500, body: "Error parsing form data" });
    }
  });
};

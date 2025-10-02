import Mailgun from "mailgun.js";
import formData from "form-data";
import fs from "fs";
import formidable from "formidable";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const form = formidable({ multiples: false });

  return new Promise((resolve) => {
    form.parse(event, async (err, fields, files) => {
      if (err) {
        console.error("Form parse error:", err);
        resolve({ statusCode: 400, body: JSON.stringify({ error: "Invalid form data" }) });
        return;
      }

      try {
        const { name, email, company, subject, message } = fields;
        const file = files?.attachment;

        const msgData = {
          from: `${name} <${email}>`,
          to: "contact@githubtechnologies.com", // Change to your email
          subject: `Contact Form: ${subject || "New Submission"}`,
          text: `${message}\n\nFrom: ${name}\nCompany: ${company}\nEmail: ${email}`,
          attachment: file
            ? fs.createReadStream(file.filepath) // ✅ fixed way to send attachment
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
  });
};
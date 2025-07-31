const mailgun = require("mailgun-js");

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST'
  };
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  try {
    if (data.honeypot) {
      return {
        statusCode: 200,
        header,
        body: JSON.stringify({ message: "Email sent successfully" })
      };
    }
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" })
      };
    }

    const mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    });

    const emailData = {
      from: `${data.name} <${data.email}>`,
      to: "contact@githubtechnologies.com", // Your email address
      subject: data.subject || "New message from contact form",
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Company: ${data.company || "N/A"}
        Subject: ${data.subject || "No subject"}
        
        Message:
        ${data.message}
      `
    };

    await mg.messages().send(emailData);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" })
    };
    
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};
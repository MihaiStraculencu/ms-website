import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again later",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, mobileNumber, message } = req.body;

    // Sanitize inputs
    const sanitizedFirstName = firstName
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const sanitizedLastName = lastName
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const sanitizedEmail = email.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedMobileNumber = mobileNumber
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const sanitizedMessage = message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: '"Your Name" <your-email@example.com>',
        to: "destination@example.com",
        subject: "New Form Submission",
        text: `
          Name: ${sanitizedFirstName} ${sanitizedLastName}
          Email: ${sanitizedEmail}
          Mobile: ${sanitizedMobileNumber}
          Message: ${sanitizedMessage}
        `,
        html: `
          <h1>New Form Submission</h1>
          <p><strong>Name:</strong> ${sanitizedFirstName} ${sanitizedLastName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Mobile:</strong> ${sanitizedMobileNumber}</p>
          <p><strong>Message:</strong> ${sanitizedMessage}</p>
        `,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

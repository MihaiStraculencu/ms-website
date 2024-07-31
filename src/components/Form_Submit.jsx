import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import Cors from "cors";
import validator from "validator";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again later",
});

const cors = Cors({
  methods: ["POST", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

async function handler(req, res) {
  await runMiddleware(req, res, cors);

  // Set security headers
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method === "POST") {
    const { firstName, lastName, email, mobileNumber, message } = req.body;

    // Input validation
    if (!firstName || !lastName || !email || !mobileNumber || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!validator.isMobilePhone(mobileNumber)) {
      return res.status(400).json({ message: "Invalid mobile number format" });
    }

    // Sanitize inputs
    const sanitizedFirstName = validator.escape(firstName);
    const sanitizedLastName = validator.escape(lastName);
    const sanitizedEmail = validator.escape(email);
    const sanitizedMobileNumber = validator.escape(mobileNumber);
    const sanitizedMessage = validator.escape(message);

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
        from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
        to: process.env.TO_EMAIL,
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

      console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      if (error.code === "EAUTH") {
        res.status(500).json({ message: "Authentication error occurred" });
      } else if (error.code === "ESOCKET") {
        res.status(500).json({ message: "Network error occurred" });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default limiter(handler);

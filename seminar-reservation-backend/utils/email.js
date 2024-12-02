// Import the nodemailer package
import nodemailer from 'nodemailer';

// Create a transporter for sending emails using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail', // Specifies the email service (Gmail in this case)
  auth: {
    user: process.env.EMAIL_USER, // Email address used to send emails
    pass: process.env.EMAIL_PASS, // App password for the email account
  },
});

// Define an asynchronous function to send emails
const sendEmail = async (to, subject, text, html) => {
  try {
    // Send an email with the specified details
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender's email address
      to, // Recipient's email address
      subject, // Subject of the email
      text, // Plain text version of the email
      html, // HTML version of the email
    });
    console.log('Email sent successfully'); // Log success message
  } catch (error) {
    console.error('Error sending email:', error); // Log errors if any
  }
};

// Export the sendEmail function to use in other files
export default sendEmail;

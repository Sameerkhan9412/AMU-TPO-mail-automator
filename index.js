import express from 'express';
import dotenv from 'dotenv';
import getCompanyInfo from './controller/getCompanyInfo.js';
import mailSender from './sendMail.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Home route
app.get('/', (req, res) => {
  res.send("Server is running 🚀");
});

// API to send bulk emails from Google Sheet
app.get("/apis", getCompanyInfo);

// Test email route
app.get('/send', async (req, res) => {
  try {
    await mailSender(
      "codewithsameer786@gmail.com",
      "Test Email",
      "<h1>Hello World</h1>"
    );
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});

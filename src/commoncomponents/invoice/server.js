// server.js (or your server file)
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { email, pdfBase64 } = req.body;

  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
      user: 'a3110k2004@gmail.com', // Your email
      pass: 'icnl ysge kocu ehxb' // Your email password
    }
  });

  // Send email with PDF attachment
  try {
    let info = await transporter.sendMail({
      from: '"Invoice Sender" <your-email@gmail.com>', // Sender address
      to: email, // List of recipients
      subject: 'Your Invoice', // Subject line
      text: 'Please find the attached invoice.', // Plain text body
      attachments: [
        {
          filename: 'invoice.pdf',
          content: pdfBase64,
          encoding: 'base64'
        }
      ]
    });

    console.log('Message sent: %s', info.messageId);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

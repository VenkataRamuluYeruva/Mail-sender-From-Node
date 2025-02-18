// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Create a transporter object with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yeruvavenkataramulu9371@gmail.com', // Your Gmail address
    pass: 'yqkhgxbxgvfqqape', // App Password if 2FA is enabled, otherwise Gmail password
  }
});

// Configure the mailoptions object
const mailOptions = {
  from: 'yeruvavenkataramulu9371@gmail.com', // Sender address
  to: 'venkataramulu9100@gmail.com', // List of recipients
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

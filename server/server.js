const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    try {
        const { firstName, lastName, email, contact, company, website, message, checkbox1 } = req.body;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_PORT === '465', // Use SSL/TLS if port is 465
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_EMAIL, 
            to: process.env.RECEIVER_EMAIL,   
            subject: 'New Commercializer Request',
            html: `
                <h1>New Commercializer Request</h1>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Website:</strong> ${website || 'N/A'}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p><strong>Opt-in for updates:</strong> ${checkbox1 ? 'Yes' : 'No'}</p>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);

        res.status(200).json({ status: 'success', message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ status: 'error', message: 'Failed to send email.', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// 1. create transporter obj
// 2. mail in options obj
// 3. sendMail method

router.post('/contact', (req, res) => {
    let data = req.body;

    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({ message: 'Please fill in all required fields' })
    }
    let smtpTransporter = nodemailer.createTransport({
        service: 'Hotmail',
        secureConnection: true,
        port: 587,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    let mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_ADDRESS,
        subject: `message from ${data.name}`,
        html: `
        
        <h3>Information</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
        <li>Phone: ${data.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
        `
    }

    smtpTransporter.sendMail(mailOptions, (error) => {
        console.log(error)
        try {
            res.status(200).json({
                message: "Thank you for contacting me!"
            })
        } catch (error) {
            if (error) return res.status(500).json({
                message: 'Server Error'
            })
        }
    })
})

module.exports = router;

import { Router } from 'express';
// import { sendEmail } from '../utils/mail';
// import mailer from '../mailer/index';
import nodemailer from 'nodemailer';
// import config from '../mailer/config/source.json'

const router = Router();

router.get('/', (req, res) => {
    res.send('Server working. Please post at "/contact" to submit a message.')
  })
  
router.post('/', (req, res, next) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'Gmail',
        auth: {
            type: 'OAuth2',
            user: 'joseph.fenderson@gmail.com',
            clientId: '740089731687-7pipbomm18s00o0774igr8g87v5v57k6.apps.googleusercontent.com',
            clientSecret: 'x9yeKyAWLkbL_n8ew23C6WdX',
            refreshToken: '1/29ofVkBWwX4o0mT2ptVYd9x55oIDE8BiGTEXdF7pO8w',
        }
    });

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mailOption = {
        from: `${name} <${email}>`,
        to: `${email}`,
        subject: `New Message from ${email} at resume-page`,
        text: message,
        html: `<p>${message}</p>`,
    };

    transporter.sendMail(mailOption,(error, res)=> {
        // console.log(info)
        if (error) {
            console.log(error);
        } else {
            res.sendStatus(201);
        }
        transporter.close()
    });
    next()
 })

export default router;
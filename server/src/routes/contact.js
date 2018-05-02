import { Router } from 'express';
import { sendEmail } from '../utils/mail';
import mailer from '../mailer/index';
import nodemailer from 'nodemailer';
// import config from '../mailer/config/source.json'

const router = Router();

// const auth ={
//     type: 'OAuth2',
//     apiKey: 'AIzaSyCKKMYjiZdpSKQZEYinnCmYHO8jqf-PmW8',
//     user: 'joseph.fenderson@gmail.com',
//     clientId: '740089731687-7pipbomm18s00o0774igr8g87v5v57k6.apps.googleusercontent.com',
//     clientSecret: 'x9yeKyAWLkbL_n8ew23C6WdX',
//     refreshToken: '1/29ofVkBWwX4o0mT2ptVYd9x55oIDE8BiGTEXdF7pO8w',
// }

router.get('/', (req, res) => {
    res.send('Server working. Please post at "/contact" to submit a message.')
  })
  
router.post('/', (req, res) => {
    let messageBody = ` Name: ${req.body.name}
                        Email: ${req.body.email}
                        Message: ${req.body.message}`;
    sendEmail('fenderson.joseph@gmail.com', 'no-reply@gmail.com', 'New Contact Form Submission', messageBody)
        .then((res) => {
            res.sendStatus(201);
        }).catch((err) => {
            next(err)
        })

//     var transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             type: 'OAuth2',
//             user: 'joseph.fenderson@gmail.com',
//             clientId: '740089731687-7pipbomm18s00o0774igr8g87v5v57k6.apps.googleusercontent.com',
//             clientSecret: 'x9yeKyAWLkbL_n8ew23C6WdX',
//             refreshToken: '1/29ofVkBWwX4o0mT2ptVYd9x55oIDE8BiGTEXdF7pO8w',
//         }
//     });
// // const { email = '', name = '', message = '' } = req.body
//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message;
//     var from = `${email}`
//     var mailOption = {
//         from: from,
//         to: 'joseph.fenderson@gmail.com',
//         subject: `New Message from ${from} at resume-page`,
//         text: `${message}`,
//         html: `<p>${message}</p>`
//     };

//     transporter.sendMail(mailOption,(error, res)=> {
//         // console.log(info)
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(JSON.stringify(res));
//         }
//         transporter.close()
//     });

})

export default router;
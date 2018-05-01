import { Router } from 'express';
import mailer from '../mailer/index';
import nodemailer from 'nodemailer';
import config from '../mailer/config/index'

const router = Router();

router.get('/', (req, res) => {
    res.send('Server working. Please post at "/contact" to submit a message.')
  })
  
router.post('/', (req, res) => {
    // console.log(req)
    console.log(req.body.name)

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            type: 'OAuth2',
            user: config.user,
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            refreshToken: config.refreshToken,
            accessToken: config.accessToken
        }
    });
// const { email = '', name = '', message = '' } = req.body
const name = req.body;
const email = req.body;
const message = req.body;
var from = `${name} <${email}>`
var mailOption = {
    from: from,
    to: 'joseph.fenderson@gamil.com',
    subject: `New Message from ${from} at resume-page`,
    text: `${message}`
};

transporter.sendMail(mailOption,(error, info)=> {
    // console.log(info)
    if (error) {
        console.log(error);
        res.sendStatus(400)
    } else {
        console.log('Message sent: ' + info.response);
        res.sendStatus(200);
    }
})

// mailer({ email, name, text: message })
// .then(() => {
//     console.log(`Sent the message "${message}" from <${name}> ${email}.`);
//     res.redirect('/#success');
// })
// .catch((error) => {
//     console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
//     res.redirect('/#error');
// })
})

export default router;
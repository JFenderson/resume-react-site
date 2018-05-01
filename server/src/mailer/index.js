import nodemailer from 'nodemailer';
import config from './config';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        config
    }
});

const send = ({ email, name, text }) => {
    const from = name && email ? `${name} <${email}` : `${name || email}`
    const message = {
        from,
        to: 'fenderson.joseph@gmail.com',
        subject: `New Message from ${from} at resume-page`,
        text,
        replyTo: from
    };

    return new Promise((resolve, reject)=> {
        transporter.sendMail(message, (error, info)=> 
            error ? reject(error) : resolve(info)
        )
    })
}

export default send;
import nodemailer from 'nodemailer';
import config from './config/index';

const transporter = nodemailer.createTransport({
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

const send = ({ email, name, text }) => {
    const from = name && email ? `${name} <${email}` : `${name || email}`
    const message = {
        from,
        to: process.env.USER,
        subject: `New Message from ${from} at resume-page`,
        text: `New Mail. ${name} Email: ${email}`,
        replyTo: from
    };

    return new Promise((resolve, reject)=> {
        transporter.sendMail(message, (error, info)=> {
            if(error) {
                reject(error)
                return 
        } 
        resolve(info)
        })
    })
}

export default send;
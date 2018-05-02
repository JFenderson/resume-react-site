const mailgunLoader = require('mailgun-js');

let mailgun = mailgunLoader({
    apiKey: process.env.MAIL_API_KEY,
    domain: 'sandboxde3a03b6aac24cd5aee0550866383b54.mailgun.org'
})

function sendEmail(to, from, subject, content) {
    let data = {
        from,
        to,
        subject,
        html: content
    };

    return mailgun.messages().send(data, (err, body)=>{
        if(err){
            console.log(err)
        }else{
            console.log(body)
        }
    });
    
}

export { sendEmail }

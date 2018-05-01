import express  from 'express';
import { join } from 'path';
import bodyParser  from 'body-parser';
import config  from './mailer/config';
import nodemailer  from 'nodemailer';
import apiRouter  from './routes';
import mailer  from './mailer';


const app = express();
const CLIENT_PATH = join(__dirname, '../../client');




// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         type: 'OAuth2',
//         ...config
//     }
// });

// const sendMail = message => {
//     return new Promise((resolve, reject)=> {
//         transporter.sendMail(message, (error, info)=> {
//             if(error){
//                 reject(error)
//                 return
//             }
//             resolve(info)
//         });
//     })
// }
app.use('/api', apiRouter);
app.use(express.static(CLIENT_PATH));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//and remove cacheing so we get the most recent comments
res.setHeader("Cache-Control", "no-cache");
next();
});

app.get('/', (req,res) => res.send('Hello World'))

app.listen(3000, ()=> console.log('Server is listening on port 3000'))

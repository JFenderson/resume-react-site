import express  from 'express';
import { join } from 'path';
import bodyParser  from 'body-parser';
import nodemailer  from 'nodemailer';
import Router  from './routes';


const app = express();
const CLIENT_PATH = join(__dirname, '../../client');
app.use(express.static(CLIENT_PATH));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', Router);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

res.setHeader("Cache-Control", "no-cache");
next();
});

app.get('/', (req,res) => res.send('Hello World'))

app.listen(3000, ()=> console.log('Server is listening on port 3000'))

import express  from 'express';
import { join } from 'path';
import bodyParser  from 'body-parser';
import nodemailer  from 'nodemailer';
import routes  from './routes';
import stateRouting from './middleware/routing.mw';



const app = express();
const CLIENT_PATH = join(__dirname, '../../client');

app.use(express.static(CLIENT_PATH));
app.use(express.json())

app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

app.use(stateRouting);

app.get('/', (req,res) => res.send('Hello World'))

app.listen(3000, ()=> console.log('Server is listening on port 3000'))

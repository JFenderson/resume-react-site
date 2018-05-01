import { Router } from 'express';
import mailer from '../mailer';

const router = Router();

router.get('*', (req, res) => {
    res.send('Server is working. Please post at "/contact" to submit a message.')
  })
  
router.post('/', (req, res) => {
const { email = '', name = '', message = '' } = req.body

mailer({ email, name, text: message }).then(() => {
    console.log(`Sent the message "${message}" from <${name}> ${email}.`);
    res.redirect('/#success');
}).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    res.redirect('/#error');
})
})

export default router;
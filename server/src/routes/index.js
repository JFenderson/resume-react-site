import { Router } from 'express';
import contactRouter from './contact';

let router = Router();

router.use('/contact', contactRouter)


export default router;
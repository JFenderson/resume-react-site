import { Router } from 'express';
import contactRouter from './contact';

let router = Router();

router.use('/', contactRouter)


export default router;
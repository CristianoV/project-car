import { Request, Response, Router } from 'express';
import login from '../controler/login.controler';

const router = Router();

router.get('/login', login);

export default router;
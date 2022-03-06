import { Router } from 'express';
import { loginPost } from '../controllers/login';

export const routerLogin = Router();

routerLogin.post('/', loginPost);
import { Router } from 'express';
import { AuthController } from '../controllers/index.js';

export const AuthRouter = Router();

AuthRouter.post('/login', AuthController.login);
AuthRouter.post('/signup', AuthController.signUp);
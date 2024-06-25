import { Router } from "express";
import { AuthController } from "../controllers/index.js";

export const AuthRouter = Router()

const { login, signUp } = AuthController

AuthRouter.post('/login', login)

AuthRouter.post('/signup', signUp)
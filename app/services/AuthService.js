import jwt from 'jsonwebtoken';
import { UserService } from './UserService.js'

const secret = process.env.JWT_SECRET
const { getByEmail } = UserService;

export const AuthService = {
  login: async function (email, password) {
    const user = await getByEmail(email)
    if (!user) return null;
    const isPasswordValid = user.password === password
    if (!isPasswordValid) return null
    return jwt.sign({email}, JWT_SECRET, {expiresIn: 3600})
  },

  signUp: async function (id) {
    return 'sign up';
  }
}
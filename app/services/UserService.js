import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { UserRepository } from '../repositories/index.js';

const { getUsers, getById, getByEmail, postUser, updateUser, deleteUser } = UserRepository

const salt = process.env.SALT
const secret = process.env.JWT_SECRET;

export const UserService = {
  login:  async function (email, password) {
    try {
      const data = await UserService.getByEmail(email);
      const user = data.dataValues;
      if (!user) return null;
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) return null
      if (isPasswordValid) return jwt.sign({email, role: user.role}, secret, {expiresIn: '15m'})
    } catch (err) {
      console.error(err);
    }
  },
  signUp: async function (id) {
    return 'sign up';
  },
  getUsers: async () => getUsers(),
  getById: async (id) => getById(id),
  getByEmail: async (email) => getByEmail(email),
  postUser: async (user) => {
    try {
      bcrypt.hash(user.password, parseInt(salt), (err, hash) => {
        user.password = hash
        postUser(user)
    })
    } catch (err) {
      console.error(err)
    }
  },
  updateUser: async (user, id) => updateUser(user, id),
  deleteUser: async (id) => deleteUser(id),
};

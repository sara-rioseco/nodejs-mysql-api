import { UserService } from '../services/index.js';

const { login, signUp } = UserService;

export const AuthController = {
  login: async function (req, res, next) {
    try {
      const { email, password } = req.body;
      const token = await login(email, password);
      if (!token) res.send({ message: 'Invalid credentials'})
      if (token) {
        res.send({message: 'Login successful', data : { token }})
      }
      next()
    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  signUp: async function (req, res, next) {
    try {
      const { name, surname, email, password } = req.body;
      const isUserCreated = signUp(name, surname, email, password);
      if (isUserCreated) {
        res.send('User created: ', isUserCreated)
        return
      }
      else throw new Error('Error creating user');
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
};

import { AuthService } from '../services/index.js';

const { login, signUp } = AuthService;

export const AuthController = {
  login: async function (req, res, next) {
    try {
      const { email, password } = req.body;
      const { token } = login(email, password);
      if (token) {
        res.send(token)
        return
      }
      else throw new Error('Error obtaining token');
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

import { Router } from 'express';
import { UserController } from '../controllers/index.js';

export const UserRouter = Router();

UserRouter.get('/', UserController.getUsers);
UserRouter.get('/:id', UserController.getById);
UserRouter.post('/', UserController.postUser);
UserRouter.put('/:id', UserController.updateUser);
UserRouter.delete('/:id', UserController.deleteUser);
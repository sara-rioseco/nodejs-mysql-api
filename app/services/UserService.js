import { User } from '../models/user.js';
import { UserRepository } from '../repositories/index.js';

const { getUsers, getById, postUser, updateUser, deleteUser } = UserRepository

export const UserService = {
  getUsers: async () => getUsers(),
  getById: async (id) => getById(id),
  postUser: async (user) => postUser(user),
  updateUser: async (user, id) => updateUser(user, id),
  deleteUser: async (id) => deleteUser(id),
};

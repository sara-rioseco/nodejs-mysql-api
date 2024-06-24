import { UserRepository } from '../repositories/index.js';

const { getUsers, getById, getByEmail, postUser, updateUser, deleteUser } = UserRepository

export const UserService = {
  getUsers: async () => getUsers(),
  getById: async (id) => getById(id),
  getByEmail: async (email) => getByEmail(email),
  postUser: async (user) => postUser(user),
  updateUser: async (user, id) => updateUser(user, id),
  deleteUser: async (id) => deleteUser(id),
};

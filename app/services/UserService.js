import { User } from '../models/user.js';

export const UserService = {
  getUsers: async function () {
    return await User.findAll();
  },

  getById: async function (id) {
    return await User.findByPk(id);
  },

  postUser: async function (user) {
    const { name, surname, email, password } = user
    const u = await User.create({ name, surname, email, password });
    const newUser = await u.save();
    return newUser;
  },

  updateUser: async function (user, id) {
    const { name, surname, email, password } = user
    return await User.update({ name, surname, email, password },
      { where: {
        id: id,
      }}
    );
  },

  deleteUser: async function (id) {
    return await User.destroy({
      where: {
        id: id,
      },
    });
  },
};

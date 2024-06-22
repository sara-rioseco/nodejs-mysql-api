import { UserService } from "../services/index.js"

const { getUsers, getById, postUser, updateUser, deleteUser } = UserService

export const UserController = {
  getUsers: async function (req, res) {    
    return await getUsers()
  },

  getById: async function (req, res) {
    const { id } = req.params
    return await getById(id)
  },

  postUser: async function (req, res) {
    const user = req.body
    return await postUser(user)
  },

  updateUser: async function (req, res) {
    const user = req.body
    const { id } = req.params
    return await updateUser(user, id)
  },

  deleteUser: async function (req, res) {
    const { id } = req.params
    return await deleteUser(id) 
  },
}
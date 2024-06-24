import { UserService } from "../services/index.js"

const { getUsers, getById, postUser, updateUser, deleteUser } = UserService

export const UserController = {
  getUsers: async function (req, res, next) {
    try {
      const users = await getUsers()
      res.send(users)
    } catch (err) {
      console.error(err)
      next(err)
    }  
  },

  getById: async function (req, res, next) {
    const { id } = req.params
    try {
      const user = await getById(id)
      res.send(user)
    } catch (err) {
      console.error(err)
      next(err)
    }  
  },

  postUser: async function (req, res, next) {
    const user = req.body
    try {
      const createdUser = await postUser(user)
      res.send(createdUser)
    } catch (err) {
      console.error(err)
      next(err)
    }  
  },

  updateUser: async function (req, res, next) {
    const user = req.body
    const { id } = req.params
    try {
      const isUserUpdated = await updateUser(user, id)
      res.send(isUserUpdated[0] === 1 ? 'User updated successfully' : 'Error updating user')
    } catch (err) {
      console.error(err)
      next(err)
    }  
  },

  deleteUser: async function (req, res, next) {
    const { id } = req.params
    try {
      const isUserDeleted = await deleteUser(id)
      res.send(isUserDeleted === 1 ? 'User deleted successfully' : ' Error deleting user')
    } catch (err) {
      console.error(err)
      next(err)
    }  
    return await deleteUser(id) 
  },
}
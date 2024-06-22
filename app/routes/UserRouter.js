import { Router } from "express";
import { UserController } from "../controllers/index.js";

export const UserRouter = Router()

const { getUsers, getById, postUser, updateUser, deleteUser } = UserController

UserRouter.get('/', async (req, res) => {
  try { 
    const users = await getUsers(req, res)
    res.send(users)
  } catch (err) {
    console.log(err)
  }
})

UserRouter.get('/:id', async (req, res) => {
  try { 
    const user = await getById(req, res)
    res.send(user)
  } catch (err) {
    console.log(err)
  }
})

UserRouter.post('/', async (req, res) => {
  try { 
    const user = await postUser(req, res)
    res.send(user)
  } catch (err) {
    console.log(err)
  }
})

UserRouter.put('/:id', async (req, res) => {
  try { 
    const userUpdated = await updateUser(req, res)
    console.log()
    res.send(`User updated: ${userUpdated[0] === 1}`)
  } catch (err) {
    console.log(err)
  }
})

UserRouter.delete('/:id', async (req, res) => {
  try { 
    const userDeleted = await deleteUser(req, res)
    res.send(`User deleted: ${userDeleted[0] === 1}`)
  } catch (err) {
    console.log(err)
  }
})
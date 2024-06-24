import { Router } from "express";
import { UserController } from "../controllers/index.js";

export const UserRouter = Router()

const { getUsers, getById, postUser, updateUser, deleteUser } = UserController

UserRouter.get('/', getUsers)

UserRouter.get('/:id', getById)

UserRouter.post('/', postUser)

UserRouter.put('/:id', updateUser)

UserRouter.delete('/:id', deleteUser)
import { Router } from "express";
import { OrderController } from "../controllers/index.js";

export const OrderRouter = Router()

const { getOrders, getById, postOrder, updateOrder, deleteOrder } = OrderController

OrderRouter.get('/', getOrders)

OrderRouter.get('/:id', getById)

OrderRouter.post('/', postOrder)

OrderRouter.put('/:id', updateOrder)

OrderRouter.delete('/:id', deleteOrder)
import { Router } from 'express';
import { OrderController } from '../controllers/index.js';

export const OrderRouter = Router();

OrderRouter.get('/', OrderController.getOrders);
OrderRouter.get('/:id', OrderController.getById);
OrderRouter.post('/', OrderController.postOrder);
OrderRouter.put('/:id', OrderController.updateOrder);
OrderRouter.delete('/:id', OrderController.deleteOrder);
import { Router } from 'express';
import { ProductController } from '../controllers/index.js';

export const ProductRouter = Router();

ProductRouter.get('/', ProductController.getProducts);
ProductRouter.get('/:id', ProductController.getById);
ProductRouter.post('/', ProductController.postProduct);
ProductRouter.put('/:id', ProductController.updateProduct);
ProductRouter.delete('/:id', ProductController.deleteProduct);
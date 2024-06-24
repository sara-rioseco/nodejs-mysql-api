import { Router } from "express";
import { ProductController } from "../controllers/index.js";

export const ProductRouter = Router()

const { getProducts, getById, postProduct, updateProduct, deleteProduct } = ProductController

ProductRouter.get('/', getProducts)

ProductRouter.get('/:id', getById)

ProductRouter.post('/', postProduct)

ProductRouter.put('/:id', updateProduct)

ProductRouter.delete('/:id', deleteProduct)
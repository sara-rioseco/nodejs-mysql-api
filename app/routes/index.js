import { Router } from 'express'
import { UserRouter } from './UserRouter.js'
import { ProductRouter } from './ProductRouter.js'
import { OrderRouter } from './OrderRouter.js'


export const router = Router()

router.use('/users', UserRouter)
router.use('/products', ProductRouter)
router.use('/orders', OrderRouter)

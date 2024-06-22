import { Router } from 'express'
import { UserRouter } from './UserRouter.js'
import { ProductRouter } from './ProductRouter.js'

export const router = Router()

router.use('/users', UserRouter)
router.use('/products', ProductRouter)

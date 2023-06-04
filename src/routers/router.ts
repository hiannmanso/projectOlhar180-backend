import { Router } from 'express'
import taskRouter from './task.router'
import authRouter from './auth.router'

const router = Router()
router.use(taskRouter)
router.use(authRouter)
export default router
import { Router } from 'express'
import {
	signInGET,
	signUpPOST,
} from '../controllers/auth.controller'
import { validateSchema } from '../middlewares/validateSchema'
import { signUpSchema } from '../schemas/signup.schema'
import { signInSchema } from '../schemas/signin.schema'

const authRouter = Router()

authRouter.post('/signup', validateSchema(signUpSchema), signUpPOST)
authRouter.get('/signin', validateSchema(signInSchema), signInGET)

export default authRouter
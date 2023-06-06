import {
  signInGET,
  signUpPOST
} from "./chunk-UYMRIEY3.mjs";
import {
  signUpSchema
} from "./chunk-KGT6EHF5.mjs";
import {
  validateSchema
} from "./chunk-FZGIYWVJ.mjs";

// src/routers/auth.router.ts
import { Router } from "express";
var authRouter = Router();
authRouter.post("/signup", validateSchema(signUpSchema), signUpPOST);
authRouter.post("/signin", signInGET);
var auth_router_default = authRouter;

export {
  auth_router_default
};

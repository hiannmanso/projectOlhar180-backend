import {
  auth_router_default
} from "./chunk-YPKQO6UX.mjs";
import {
  task_router_default
} from "./chunk-AVPZWLQG.mjs";

// src/routers/router.ts
import { Router } from "express";
var router = Router();
router.use(task_router_default);
router.use(auth_router_default);
var router_default = router;

export {
  router_default
};

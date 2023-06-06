import {
  taskStatusPUT,
  tasksDELETE,
  tasksGET,
  tasksPOST,
  tasksPUT,
  tasksSingleGET
} from "./chunk-3LVMQ3ML.mjs";
import {
  taskSchema
} from "./chunk-EIA56RAE.mjs";
import {
  validateSchema
} from "./chunk-FZGIYWVJ.mjs";

// src/routers/task.router.ts
import { Router } from "express";
var taskRouter = Router();
taskRouter.post("/tasks", validateSchema(taskSchema), tasksPOST);
taskRouter.get("/tasks", tasksGET);
taskRouter.get("/tasks/:id", tasksSingleGET);
taskRouter.put("/tasks/:id", validateSchema(taskSchema), tasksPUT);
taskRouter.put("/tasks/status/:id", taskStatusPUT);
taskRouter.delete("/tasks/:id", tasksDELETE);
var task_router_default = taskRouter;

export {
  task_router_default
};

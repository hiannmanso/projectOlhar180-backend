import {
  tasks_service_default
} from "./chunk-RONFJPLV.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-SOEV5HRE.mjs";

// src/controllers/tasks.controller.ts
async function tasksPOST(req, res) {
  const { authorization } = req.headers;
  const data = req.body;
  await tasks_service_default.insertNewTask(data, authorization);
  res.status(201).send("New task add.");
}
async function tasksGET(req, res) {
  const { authorization } = req.headers;
  const result = await tasks_service_default.getAllTasks(authorization);
  res.status(200).send(result);
}
async function tasksSingleGET(req, res) {
  const { authorization } = req.headers;
  const { id } = req.params;
  console.log(id);
  const taskId = Number(id);
  if (isNaN(taskId)) {
    throw {
      status: 404,
      message: `This id was not recognized`
    };
  }
  const result = await tasks_service_default.getByTaskId(taskId, authorization);
  console.log(result);
  res.status(200).send(result);
}
async function tasksPUT(req, res) {
  const { authorization } = req.headers;
  const { id } = req.params;
  const taskId = Number(id);
  if (isNaN(taskId)) {
    throw {
      status: 404,
      message: `This id was not recognized`
    };
  }
  const body = req.body;
  const data = __spreadProps(__spreadValues({}, body), { id: taskId });
  console.log(data);
  const result = await tasks_service_default.editTask(data, authorization);
  res.status(200).send(result);
}
async function tasksDELETE(req, res) {
  const { authorization } = req.headers;
  const { id } = req.params;
  const taskId = Number(id);
  if (isNaN(taskId)) {
    throw {
      status: 404,
      message: `This id was not recognized`
    };
  }
  const result = await tasks_service_default.deleteTask(taskId, authorization);
  res.status(200).send(result);
}
async function taskStatusPUT(req, res) {
  const { authorization } = req.headers;
  const { id } = req.params;
  const taskId = Number(id);
  if (isNaN(taskId)) {
    throw {
      status: 404,
      message: `This id was not recognized`
    };
  }
  const result = await tasks_service_default.changeStatus(taskId, authorization);
  res.status(200).send(result);
}

export {
  tasksPOST,
  tasksGET,
  tasksSingleGET,
  tasksPUT,
  tasksDELETE,
  taskStatusPUT
};

import {
  task_repository_default
} from "./chunk-Q3WTWAX2.mjs";
import {
  decodeToken
} from "./chunk-J4WRYM7L.mjs";

// src/services/tasks.service.ts
async function insertNewTask(data, token) {
  const infosToken = decodeToken(token);
  console.log(infosToken);
  const haveThisTask = await task_repository_default.getTasksByTitle(data.title);
  for (const item of haveThisTask) {
    if (item.describe === data.describe && item.finalDate === data.finalDate && item.priority === data.priority) {
      throw {
        status: 404,
        message: `This task already exist.`
      };
    }
  }
  console.log(haveThisTask);
  return await task_repository_default.insert(data, infosToken.userID);
}
async function getAllTasks(token) {
  const infosToken = decodeToken(token);
  console.log(infosToken);
  const result = await task_repository_default.getAll(infosToken.userID);
  if (result.length === 0) {
    throw {
      status: 404,
      message: `You have no tasks registered`
    };
  }
  return result;
}
async function getByTaskId(id, token) {
  const infosToken = decodeToken(token);
  const result = await task_repository_default.getById(id);
  if (!result) {
    throw {
      status: 404,
      message: `Erro on load this task, please try again.`
    };
  }
  if (result.accountId !== infosToken.userID) {
    throw {
      status: 404,
      message: `This task is not yours, please try again.`
    };
  }
  return result;
}
async function editTask(data, token) {
  const infosToken = decodeToken(token);
  console.log(infosToken);
  const infoTask = await task_repository_default.getById(data.id);
  if (!infoTask) {
    throw {
      status: 404,
      message: `Erro on load this task, please try again.`
    };
  }
  if (infoTask.accountId !== infosToken.userID) {
    throw {
      status: 404,
      message: `This task is not yours, please try again.`
    };
  }
  const result = await task_repository_default.edit(data);
  return result;
}
async function changeStatus(taskId, token) {
  const infosToken = decodeToken(token);
  let status = "feito";
  console.log(infosToken);
  const infoTask = await task_repository_default.getById(taskId);
  if (!infoTask) {
    throw {
      status: 404,
      message: `Erro on load this task, please try again.`
    };
  }
  if (infoTask.accountId !== infosToken.userID) {
    throw {
      status: 404,
      message: `This task is not yours, please try again.`
    };
  }
  if (infoTask.status === "feito") {
    status = "pendente";
  }
  const result = await task_repository_default.editStatus(taskId, status);
  return result;
}
async function deleteTask(taskId, token) {
  const infosToken = decodeToken(token);
  console.log(infosToken);
  console.log(taskId);
  const infoTask = await task_repository_default.getById(taskId);
  if (!infoTask) {
    throw {
      status: 404,
      message: `Erro on load this task, please try again.`
    };
  }
  if (infoTask.accountId !== infosToken.userID) {
    throw {
      status: 404,
      message: `This task is not yours, please try again.`
    };
  }
  const result = await task_repository_default.deleteById(taskId);
  return result;
}
var taskService = { insertNewTask, getAllTasks, getByTaskId, editTask, changeStatus, deleteTask };
var tasks_service_default = taskService;

export {
  tasks_service_default
};

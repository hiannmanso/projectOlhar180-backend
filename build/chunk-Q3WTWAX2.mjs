import {
  prisma
} from "./chunk-ZZAEURF7.mjs";

// src/repositories/task.repository.ts
async function insert({ title, describe, finalDate, priority }, userId) {
  return prisma.task.create({ data: {
    title,
    describe,
    finalDate,
    priority,
    accountId: userId
  } });
}
async function getAll(userId) {
  return prisma.task.findMany({ where: { accountId: userId } });
}
async function getById(id) {
  return prisma.task.findUnique({ where: { id } });
}
async function getTasksByTitle(title) {
  return prisma.task.findMany({ where: { title } });
}
async function edit({ id, title, describe, finalDate, priority }) {
  return prisma.task.update({
    where: {
      id
    },
    data: { title, describe, finalDate, priority }
  });
}
async function editStatus(id, status) {
  return prisma.task.update({ where: { id }, data: { status } });
}
async function deleteById(id) {
  console.log(id);
  return prisma.task.delete({ where: { id } });
}
var taskRepository = {
  insert,
  getAll,
  getById,
  getTasksByTitle,
  edit,
  deleteById,
  editStatus
};
var task_repository_default = taskRepository;

export {
  task_repository_default
};

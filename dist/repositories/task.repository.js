import { prisma } from '../configs/database';
async function insert({ title, description, finalDate, priority }, userId) {
    return prisma.task.create({ data: {
            title, description, finalDate, priority, accountId: userId
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
async function edit({ id, title, description, finalDate, priority }) {
    return prisma.task.update({
        where: {
            id,
        },
        data: { title, description, finalDate, priority }
    });
}
async function editStatus(id, status) {
    return prisma.task.update({ where: { id }, data: { status } });
}
async function deleteById(id) {
    console.log(id);
    return prisma.task.delete({ where: { id } });
}
const taskRepository = {
    insert,
    getAll,
    getById,
    getTasksByTitle,
    edit,
    deleteById,
    editStatus
};
export default taskRepository;

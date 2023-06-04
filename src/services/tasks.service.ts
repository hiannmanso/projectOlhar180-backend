import { Tasks } from '../interfaces/tasks.interface';
import taskRepository from './../repositories/task.repository'


async function insertNewTask(data:Tasks) {
    return await taskRepository.insert(data)
}

async function getAllTasks() {
    return await taskRepository.getAll()
}

async function getById(id:number) {
    return await taskRepository.getById(id)
}
async function editTask(data:Tasks) {
    const infoTask = await taskRepository.edit(data)
    return infoTask
}
async function deleteTask(taskId:number) {
    const infoTask = await taskRepository.deleteById(taskId)
    return infoTask
}
const taskService={insertNewTask,getAllTasks,getById,editTask,deleteTask}
export default taskService
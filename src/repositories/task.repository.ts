import {prisma} from '../configs/database'
import { Tasks } from '../interfaces/tasks.interface';

async function insert(
    {title,describe,finalDate,priority}:Tasks,userId:number
){
    return prisma.task.create({data:{
       title,describe,finalDate,priority,accountId:userId
    }})
}
async function getAll(userId:number) {
    return prisma.task.findMany({where:{accountId:userId}})
}

async function getById(id:number) {
    return prisma.task.findUnique({where:{id}})
}
async function getTasksByTitle(title:string) {
    return prisma.task.findMany({where:{title}})
}

async function edit(
    {id,title,describe,finalDate,priority}:Tasks 
){
    return prisma.task.update({
        where:{
            id,
        },
        data:{title,describe,finalDate,priority}
    })
}

async function editStatus(id:number,status:any) {
    return prisma.task.update({where:{id},data:{status}})
}
async function deleteById(id:number) {
    console.log(id)
    return prisma.task.delete({where:{id}})
}
const taskRepository={
    insert,
    getAll,
    getById,
    getTasksByTitle,
    edit,
    deleteById,
    editStatus
}

export default taskRepository
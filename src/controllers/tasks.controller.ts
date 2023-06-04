import { Request, Response } from "express";
import taskService from "../services/tasks.service";
import { Tasks } from "../interfaces/tasks.interface";

export async function tasksPOST(req:Request,res:Response) {
    const data:Tasks= req.body
        await taskService.insertNewTask(data)
        res.status(201).send('New task add.')
}

export async function tasksGET(req:Request,res:Response) {
    const result = await taskService.getAllTasks()
    console.log(result)
    res.status(200).send(result)
}
export async function tasksSingleGET(req:Request,res:Response) {
    const {id}:any = parseInt(req.params.id,10)
    const result = await taskService.getById(id)
    console.log(result)
    res.status(200).send(result)
}

export async function tasksPUT(req:Request, res:Response) {
    const {id}:any = parseInt(req.params.id,10)
    const body:Tasks=req.body
    const data:Tasks = {...body,id}
    console.log(data)
    const result = await taskService.editTask(data)

    res.status(200).send(result)
    
}
export async function tasksDELETE(req:Request, res:Response) {
    const {taskId} = req.params
    const result = await taskService.deleteTask(Number(taskId))

    res.status(200).send(result)
    
}


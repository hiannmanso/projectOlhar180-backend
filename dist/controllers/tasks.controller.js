import taskService from "../services/tasks.service";
export async function tasksPOST(req, res) {
    const { authorization } = req.headers;
    const data = req.body;
    await taskService.insertNewTask(data, authorization);
    res.status(201).send('New task add.');
}
export async function tasksGET(req, res) {
    const { authorization } = req.headers;
    const result = await taskService.getAllTasks(authorization);
    res.status(200).send(result);
}
export async function tasksSingleGET(req, res) {
    const { authorization } = req.headers;
    const { id } = req.params;
    console.log(id);
    const taskId = Number(id);
    if (isNaN(taskId)) {
        throw {
            status: 404,
            message: `This id was not recognized`,
        };
    }
    const result = await taskService.getByTaskId(taskId, authorization);
    console.log(result);
    res.status(200).send(result);
}
export async function tasksPUT(req, res) {
    const { authorization } = req.headers;
    const { id } = req.params;
    const taskId = Number(id);
    if (isNaN(taskId)) {
        throw {
            status: 404,
            message: `This id was not recognized`,
        };
    }
    const body = req.body;
    const data = Object.assign(Object.assign({}, body), { id: taskId });
    console.log(data);
    const result = await taskService.editTask(data, authorization);
    res.status(200).send(result);
}
export async function tasksDELETE(req, res) {
    const { authorization } = req.headers;
    const { id } = req.params;
    const taskId = Number(id);
    if (isNaN(taskId)) {
        throw {
            status: 404,
            message: `This id was not recognized`,
        };
    }
    const result = await taskService.deleteTask(taskId, authorization);
    res.status(200).send(result);
}
export async function taskStatusPUT(req, res) {
    const { authorization } = req.headers;
    const { id } = req.params;
    const taskId = Number(id);
    if (isNaN(taskId)) {
        throw {
            status: 404,
            message: `This id was not recognized`,
        };
    }
    const result = await taskService.changeStatus(taskId, authorization);
    res.status(200).send(result);
}

import { BASE_MAPPING } from "../constants"

const router = app => {

    //const projectTaskService = new ProjectTaskService(app);
    const projectTaskController = app.get('ProjectTaskController');

    app.post(BASE_MAPPING, (req,res) => {
        return projectTaskController.addToBoard(req, res);
    });

    app.get(`${BASE_MAPPING}/all`, (req,res) => {
        return projectTaskController.getAllProject(req, res);
    });

    app.get(`${BASE_MAPPING}/:id`, (req,res) => {
        return projectTaskController.getTaskById(req,res);
    });

    app.delete(`${BASE_MAPPING}/:id`, (req,res) => {
        return projectTaskController.deleteTask(req,res);
    });

    app.put(BASE_MAPPING, (req,res) => {
        return projectTaskController.updateTask(req,res);
    });
}

export default router;
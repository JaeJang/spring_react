import _ from 'lodash';

import ProjectTask from '../model/projectTask';

class ProjectTaskController {
  constructor(app) {
    this.app = app;
    this.projectTaskService = app.get('ProjectTaskService');
  }

  addToBoard(req, res) {
    const data = req.body;
    const task = new ProjectTask(data);

    let hasError;
    if (!(hasError = task.hasError())) {
      return res.status(400).send(hasError);
    }

    const onFailed = error => {
      console.log(error);
      return res.status(500).send({ message: 'Internal Server Error', error: error });
    };
    const onSuccess = results => {
      return res.status(201).send(results);
    };

    return this.projectTaskService.saveOrUpdateProjectTask(task, onSuccess, onFailed);
  }

  getAllProject(req, res) {
    const onFailed = error => {
      console.log(error);
      return res.status(500).send({ message: 'Internal Server Error', error: error });
    };
    const onSuccess = results => {
      return res.status(200).send(results);
    };
    return this.projectTaskService.getAllTasks(onSuccess, onFailed);
  }

  getTaskById(req, res) {
    const id = req.params.id;
    const onSuccess = result => {
      return res.status(200).send(result);
    };
    const onFailed = error => {
      console.log(error);
      return res.status(500).send({ message: 'Internal Server Error', error: error });
    };

    return this.projectTaskService.getTaskById(id, onSuccess, onFailed);
  }

  deleteTask(req, res) {
    const id = req.params.id;
    const onSuccess = result => {
      return res.status(200).send(result);
    };
    const onFailed = error => {
      return res.status(500).send({ message: 'Internal Server Error', error: error });
    };

    return this.projectTaskService.deleteTask(id, onSuccess, onFailed);
  }

  updateTask(req, res) {
      const task = new ProjectTask(req.body);
      const onSuccess = result => {
        return res.status(200).send(result);
      }
      const onFailed = error => {
        return res.status(500).send({ message: 'Internal Server Error', error: error });
      }

      return this.projectTaskService.updateTask(task, onSuccess, onFailed);
  }
}

export default ProjectTaskController;

/*
export const addToBoard = (req, res) => {
  const data = req.body;
  const task = new ProjectTask(data);

  let hasError;
  if (!(hasError = task.hasError())) {
    return res.status(400).send(hasError);
  }

  const onFailed = error => {
    console.log(error);
    return res.status(500).send({ message: 'Internal Server Error', error: error });
  };
  const onSuccess = results => {
    return res.status(201).send(results);
  };

  return ProjectTaskService.saveOrUpdateProjectTask(task, onSuccess, onFailed);
};

export const getAllProject = (req, res) => {
  const onFailed = error => {
    console.log(error);
    return res.status(500).send({ message: 'Internal Server Error', error: error });
  };
  const onSuccess = results => {
    return res.status(200).send(results);
  };
  return ProjectTaskService.getAllTasks(onSuccess, onFailed);
};

export const getTaskById = (req, res) => {
  const id = req.params.id;
  const onSuccess = result => {
    return res.status(200).send(result);
  };
  const onFailed = error => {
    console.log(error);
    return res.status(500).send({ message: 'Internal Server Error', error: error });
  };
};*/

class ProjectTaskService {
  constructor(app) {
    this.app = app;
    this.conn = app.get('db');
  }

  saveOrUpdateProjectTask(projectTask, onSuccess, onFailed) {
    const summary = projectTask.summary;
    const acceptanceCriteria = projectTask.acceptanceCriteria;
    const status = projectTask.status ? projectTask.status : 'TO_DO';
    const sql = 'INSERT INTO ProjectTask (summary, acceptanceCriteria, status) VALUES (?, ?, ?)';

    this.conn.query(sql, [summary, acceptanceCriteria, status], (error, results) => {
      if (error) {
        onFailed(error);
      } else {
        onSuccess(results);
      }
    });
  }

  getAllTasks(onSuccess, onFailed) {
    const sql = 'SELECT * FROM ProjectTask';

    this.conn.query(sql, (error, results) => {
      if (error) {
        onFailed(error);
      } else {
        onSuccess(results);
      }
    });
  }

  getTaskById(id, onSuccess, onFailed) {
    const sql = 'SELECT * FROM ProjectTask WHERE id=?';

    this.conn.query(sql, [id], (error, result) => {
      if (error) {
        onFailed(error);
      } else {
        onSuccess(result);
      }
    });
  }

  deleteTask(id, onSuccess, onFailed) {
    const sql = 'DELETE FROM ProjectTask WHERE id=?';
    this.conn.query(sql, [id], (error, result) => {
      if (error) {
        onFailed(error);
      } else {
        onSuccess(result);
      }
    });
  }

  updateTask(task, onSuccess, onFailed) {
    const sql = 'UPDATE ProjectTask SET summary=?, acceptanceCriteria=?, status=? WHERE id=?';
    this.conn.query(
      sql,
      [task.summary, task.acceptanceCriteria, task.status, task.id],
      (error, result) => {
        if (error) {
          onFailed(error);
        } else {
          onSuccess(result);
        }
      }
    );
  }
}

export default ProjectTaskService;

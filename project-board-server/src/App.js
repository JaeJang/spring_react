import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './controller/router';
import { conn } from './db_config';
import ProjectTaskService from './service/projectTaskService';
import ProjectTaskController from './controller/projectTaskController';


const app = express();

app.use(cors({
  exposedHeaders: "*",
}));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

conn.connect(error => {
  if (error)
    console.log(error);
});

app.set('db', conn);
app.set('ProjectTaskService', new ProjectTaskService(app));
app.set('ProjectTaskController', new ProjectTaskController(app));

router(app);

app.listen(4000, () => {
  console.log('connected');
});

export default app;


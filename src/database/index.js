import Sequelize  from "sequelize";
import databaseConfig from '../config/database.js';
import UserToDo from "../models/UserToDo.js";
import List from "../models/List.js";
import Task from "../models/Task.js";

const models = [ UserToDo, List, Task];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));

import dotenv from 'dotenv';
dotenv.config();
import './src/database/index.js';
import express from 'express';
import tokenRoutes from './src/routes/token.js';
import todoRoutes from './src/routes/usertodo.js';
import listRoutes from './src/routes/list.js';
import taskRoutes from './src/routes/task.js';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({ extended: true })); //é necessário quando sua aplicação espera processar dados de formulários enviados por POST e que podem incluir estruturas mais complexas, como objetos e arrays.
        this.app.use(express.json());
    }
    routes() {
      this.app.use('/tokens/', tokenRoutes);
      this.app.use('/todo/', todoRoutes);
      this.app.use('/list/', listRoutes);
      this.app.use('/task/', taskRoutes);
    }
}

export default new App().app;

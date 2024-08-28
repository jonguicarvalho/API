import { Router } from 'express';
import taskController from '../controllers/taskController.js';
import loginRequired from '../middlewares/loginRequired.js';
import SchemaValidator from '../utils/schemaValidator.js';
import taskSchema from '../schema/taskSchema.js';
//import SchemaValidation from;

const router = new Router();

router.get('/',SchemaValidator.validate(taskSchema.index), loginRequired, taskController.index);
router.post('/', SchemaValidator.validate(taskSchema.store) ,loginRequired, taskController.store);
router.put('/:id', SchemaValidator.validate(taskSchema.update), loginRequired, taskController.update);
router.delete('/:id',SchemaValidator.validate(taskSchema.deleteTask), loginRequired, taskController.delete);

export default router;

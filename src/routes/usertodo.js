import { Router } from 'express';
import userToDoController from '../controllers/userToDoController.js';
import loginRequired from '../middlewares/loginRequired.js';
import SchemaValidator from '../utils/schemaValidator.js';
import userSchema from '../schema/userSchema.js';


const router = new Router();

router.get('/', loginRequired, userToDoController.show);
router.post('/', SchemaValidator.validate(userSchema.store), userToDoController.store);
router.put('/', SchemaValidator.validate(userSchema.update), loginRequired, userToDoController.update);
router.delete('/', loginRequired, userToDoController.delete);

export default router;

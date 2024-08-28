import { Router } from 'express';
import listController from '../controllers/listController.js';
import loginRequired from '../middlewares/loginRequired.js';
import SchemaValidator from '../utils/schemaValidator.js';
import listSchema from '../schema/listSchema.js'
//import SchemaValidation from;

const router = new Router();

router.get('/', loginRequired, listController.index);
router.post('/', SchemaValidator.validate(listSchema.SchemaStoreList), loginRequired, listController.store);
router.put('/:id', SchemaValidator.validate(listSchema.SchemaUpdateList), loginRequired, listController.update);
router.delete('/:id', SchemaValidator.validate(listSchema.deleteList), loginRequired, listController.delete);

export default router;

import express from 'express';
import {getTypesUser, store} from '../controller/TypeUsersController.js';


const router = express.Router();

router.post('/tipo', store);
router.get('/tipo', getTypesUser);

export default router;
import express from 'express';
import { createModel, deleteModel, getModel } from '../controllers/userModelController.js';

const router = express.Router();

router.post('/userModel', createModel); //your-model --> add token in the header (front-end)
router.get('/userModel/:userId', getModel); //user-profile
router.delete('/userModel/:id', deleteModel); //user-profile


export default router;
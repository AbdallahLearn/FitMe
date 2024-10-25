import express from 'express';
import { provideStyleAdvice } from '../controllers/styleController.js';

const router = express.Router();

router.post('/', provideStyleAdvice);

export default router;

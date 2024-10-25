import express from 'express';
import { suggestColors } from '../controllers/colorController.js';

const router = express.Router();

router.post('/', suggestColors);

export default router;

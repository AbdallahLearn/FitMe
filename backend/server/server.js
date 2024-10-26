import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';
import 'dotenv/config';
import userRoutes from '../routes/userRoutes.js';
import userModelRoutes from '../routes/userModelRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from "./config/db.js";
import colorRoutes from '../routes/colorRoutes.js';
import styleRoutes from '../routes/styleRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
connectDB();

app.use('/users', userRoutes);
app.use('/models', userModelRoutes); // Ensure this only appears once
app.use('/api/chatgpt-suggest-colors', colorRoutes);
app.use('/api/chatgpt-style-advice', styleRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

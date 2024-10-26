import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';
import 'dotenv/config'
import userRoutes from '../routes/userRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from "./config/db.js"; 
import colorRoutes from '../routes/colorRoutes.js';
import styleRoutes from '../routes/styleRoutes.js';

dotenv.config();
<<<<<<< HEAD
console.log(process.env.MONGO_URI); // طباعة قيمة MONGO_URI للتحقق
=======

>>>>>>> faraj

const app = express();
const port = process.env.PORT || 5050;
app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use('/users', userRoutes);
app.use('/api/chatgpt-suggest-colors', colorRoutes);
app.use('/api/chatgpt-style-advice', styleRoutes);

connectDB();
// async function main() {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB connected');
// }
// main().catch(err => console.log(err));

import chatGptStylesRouter from '../routes/api/chatgpt.js';
app.use('/users', userRoutes);

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
});
import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';
import userRoutes from '../routes/userRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from "./config/db.js"; 




dotenv.config();

console.log(process.env.MONGO_URI); // طباعة قيمة MONGO_URI للتحقق


const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use('/users', userRoutes);


connectDB();

// async function main() {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB connected');
// }

// main().catch(err => console.log(err));

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})
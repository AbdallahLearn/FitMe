import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';
import userRoutes from '../routes/userRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';


// import connectDB from "./config/db.js"; 


dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use('/users', userRoutes);


// connectDB();

async function main() {
    await mongoose.connect("mongodb+srv://AbdallahJhn:1q2w3e4r5t6y@cluster0.kej1y.mongodb.net/FitMeDB");
    console.log('MongoDB connected');
}

main().catch(err => console.log(err));

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})
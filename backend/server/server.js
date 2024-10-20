import express from express;


import connectDB from "./config/db.js"; 


const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

connectDB();

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})





import { configDotenv } from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors'




const app = express()

app.use(bodyParser.json())
app.use(cors())



configDotenv()
const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(()=>{
        console.log("MongoDB Connected")
        app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
    })
    .catch(error =>  console.log(error))

app.post("/api", (req, res) =>{
    console.log(req.body)
    res.json({"users": ["user1","user2","user3"]})
})


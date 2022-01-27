import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import bodyParser from "body-parser"
import cors from "cors"
import Connection from "./db.js";
const app = express();
const Port= 8000
dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
//route import
import users from "./routes/userRoutes.js";
import movies from "./routes/moviesRoutes.js"
app.use("/api/v1",users);
app.use("/api/v1",movies);


Connection(username,password);

app.listen(Port,(req,res)=>{
    console.log(`server are running port no ${Port}`);
})
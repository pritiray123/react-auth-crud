const express=require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express()
app.use(cors());
app.use(express.json())
const taskroute= require("./backend/routes/routes");
app.use("/tasks",taskroute);




const authroutes= require("./routes/authroute")
app.use("/api/auth",authroutes);

mongoose.connect("mongodb+srv://pritibhusan6_db_user:nede@cluster0.pw1wwaq.mongodb.net/authdb").then(()=>
console.log("db conneted"));

app.listen(5000,()=>console.log("server running on port 5000"));

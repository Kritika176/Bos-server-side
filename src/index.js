const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());


const registerController = require("./controllers/register.controller");
const loginController = require("./controllers/login.controller");


const connect = async() =>{
    try{
       return mongoose.connect("mongodb://localhost:27017/")
    }
    catch{console.log("connection error")}
}


app.listen(8080,async() => {
    try{
      await  connect();
        console.log("connected to port 8080")
    }
    catch(err){
        console.log(err.message)
    }
})
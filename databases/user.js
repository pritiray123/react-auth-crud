const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const usermodel = mongoose.model("Users",userschema);
module.exports={usermodel:usermodel}
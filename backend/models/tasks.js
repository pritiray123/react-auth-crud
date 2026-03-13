const  mongoose = require('mongoose');

const taskschema= new mongoose.Schema({
    title:String,
    description:String
});

module.exports = mongoose.model("tasks",taskschema)
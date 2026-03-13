const express = require("express");
const router =express.Router()
const tasks = require("../models/tasks");




router.post("/create",async (req,res)=>{
    const task = new tasks(req.body)
    await task.save()
    res.json(task);
})

router.get("/all",async (req,res)=>{
    const Tasks= await tasks.find();
    res.json(Tasks);
})

router.put("/update/:id",async(req,res)=>{
    const updateTask= await tasks.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(updateTask)
})

router.delete("/delete/:id",async (req,res)=>{
    const deleteTask= await tasks.findByIdAndDelete(
        req.params.id
    )
    res.json({
        msg:"deleted"
    })
})

module.exports = router;
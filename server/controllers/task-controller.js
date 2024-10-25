const asyncHandler = require('express-async-handler')
const Task = require('../models/task-model')

//get /api/tasks/
const getTask = asyncHandler(async(req,res)=>{
    const tasks = await Task.find().sort({dueDate:1}).limit(4)
    // const tasks = await Task.find()
    // console.log(tasks)
    res.status(200).json(tasks)

})

// Post /api/tasks/add
const postTask = asyncHandler(async (req,res)=>{
    const {title,description,dueDate,priority,status} = req.body;
    const createdTask = await Task.create({title,description,dueDate,priority,status})
    // res.send({msg:'task received successfully'})
    console.log(createdTask)
    res.status(201).send({msg:'created succesfully'})
})

// Get /api/tasks/:date
const getDatedTask =  asyncHandler(async (req,res) =>{
    const date= req.params.date;
    const datedTasks = await Task.find({dueDate:date})
    res.status(200).json(datedTasks.length ? datedTasks : []);
});

module.exports = {postTask,getTask,getDatedTask}

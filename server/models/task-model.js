const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    dueDate:{type:Date, required:true},
    priority:{type:String, required:true},
    status:{type:String, required:true},

})

const task =  new model('task',taskSchema)

module.exports = task 
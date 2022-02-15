const Task = require('../dbmodel/models');



const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({tasks})
    } catch (err) {
        res.status(404).json({message: err})
    }
};

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (err) {
        res.status(500).json({massage: err})
    }
};

const getTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const tasks = await Task.findOne({_id:taskID});

    if (!tasks){
        return res.status(404).json({message: `bu id ile işlem bulunmuyor: ${taskID}`})
    }
        res.status(200).json({tasks})
    } catch (err) {
        res.status(404).json({message: err})
    }
};

const updateTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndUpdate({_id:taskID}, req.body, {
            new : true,
            runValidators: true
        })
        res.status(200).json({task})
    } catch (err) {
        res.status(404).json({message: err})
    }
};

const deleteTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndDelete({_id:taskID})
        res.status(200).json({task})

    if (!task){
        return res.status(404).json({message: `bu id ile işlem bulunmuyor: ${taskID}`})
        }
    } catch (err) {
        res.status(404).json({message: err})
    }
};

module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}
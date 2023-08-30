const Task = require('../models/Task')
const asyncWrapper = require('../middlewares/async')
const {createCustomError} = require('../errors/custom-error')

const getAllTask = asyncWrapper(async (req,res) => {
  const task = await Task.find({})
  res.status(200).json({ task })  
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  })

const getTask = asyncWrapper(async (req,res,next) => {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if(!task){
        return next(createCustomError(`No task with id : ${taskID}`,404))
    }
    res.status(200).json({task})
})
  


module.exports = {
    getAllTask,
    createTask,
    getTask
}
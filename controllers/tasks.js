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
  


module.exports = {
    getAllTask,
    createTask
}
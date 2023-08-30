const express = require('express')
// import all controllers
const {createTask,getAllTask,getTask} = require('../controllers/tasks')
// import SessionController from './app/controllers/SessionController';

const routes = express.Router();

// Add routes
routes.route('/')
.get(getAllTask)
.post(createTask)

routes.route('/:id')
.get(getTask)
.delete((req,res) => {
    res.send('delete a task')
})
.patch((req,res) => {
   res.send('update a task') 
})

module.exports = routes;

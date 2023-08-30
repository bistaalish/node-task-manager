const express = require('express')
// import all controllers
const {createTask,getAllTask,getTask,deleteTask,updateTask} = require('../controllers/tasks')
// import SessionController from './app/controllers/SessionController';

const routes = express.Router();

// Add routes
routes.route('/')
.get(getAllTask)
.post(createTask)

routes.route('/:id')
.get(getTask)
.delete(deleteTask)
.patch(updateTask)

module.exports = routes;

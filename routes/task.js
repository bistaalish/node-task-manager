const express = require('express')
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = express.Router();

// Add routes
routes.route('/')
.get((req,res) => {
   res.send("get all tasks") 
})
.post((req,res) => {
  res.send("create task")  
})

routes.route('/:id')
.get((req,res) => {
    res.send("get a task")
})
.delete((req,res) => {
    res.send('delete a task')
})
.patch((req,res) => {
   res.send('update a task') 
})

module.exports = routes;

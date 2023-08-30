// Importing modules
const express = require('express');
const taskRoute = require("./routes/task")

// starting the express app
const app = express()

// Middlewares
app.use(express.json())
app.use(express.static(__dirname+"/public"))


// The index page
app.get("/",(req,res) => {
    res.send('Hello')
})

app.use("/api/v1/tasks",taskRoute)

//Listen on port set in environment variable or default to 3000
const listener = app.listen(process.env.PORT || 3000, function () {
    console.log("Node.js listening on port " + listener.address().port);
  });
  
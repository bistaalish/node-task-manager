// Importing modules
const express = require('express');

// starting the express app
const app = express()

// The index page
app.get("/",(req,res) => {
    res.send('Hello')
})

//Listen on port set in environment variable or default to 3000
const listener = app.listen(process.env.PORT || 3000, function () {
    console.log("Node.js listening on port " + listener.address().port);
  });
  
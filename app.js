// Importing modules
const express = require('express');
const taskRoute = require("./routes/task")
const connectDB = require('./db/connect')
const notFound = require("./middlewares/not-found")
const errorHandlerMiddleware = require('./middlewares/error-handler')
// const cors = require('cors');
require('dotenv').config()
// starting the express app
const app = express()


// Enabling cors
// const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",");
// app.use(cors({ origin: allowedOrigins }));

// Middlewares
app.use(express.json())
app.use(express.static(__dirname+"/public"))


// The index page
app.get("/",(req,res) => {
    res.send('Hello')
})

app.use("/api/v1/tasks",taskRoute)


app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000
//Listen on port set in environment variable or default to 3000
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  

start()
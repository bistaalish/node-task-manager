
const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = process.env.MONGO_URI;

const connectDB = (url) => {
    return mongoose.connect(url);
//Bind connection to error event (to get notification of connection errors)
}



module.exports = connectDB
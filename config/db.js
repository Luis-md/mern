require('dotenv').config()
const mongoose = require('mongoose');

const db = process.env.mongoDB;

const connectDB = async() => {
    try {
       await mongoose.connect(db, {
           useNewUrlParser: true, 
           useUnifiedTopology: true,
           useCreateIndex: true
        })
       console.log('mongodb connected')
    } catch(err) {
        console.error(err.message)
        // Exit process if it failures
        process.exit(1)
    }
}

module.exports = connectDB;
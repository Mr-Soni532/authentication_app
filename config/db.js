const mongoose = require('mongoose');
require('dotenv').config()
const mongoURI = process.env.mongoURI

const connectMongo = async ()=>{
    try {
        await mongoose.connect(mongoURI)
        console.log('Connected to mongoo')
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectMongo;
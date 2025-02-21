const express = require('express')
const app = express();
const port = 9000;
const cookieparser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require('cors')
const authrouter = require('./routes/auth')

app.use(express.json())
app.use(cors())
app.use(cookieparser())
const connection = async() =>{
    try {
    await mongoose.connect(process.env.MONGODB);
    console.log('db is running')
    } catch (error) {
        console.error(error);
    }
}

app.use('/auth',authrouter)
app.listen(port,() =>{
    console.log(`server is running on port ${port}...`)
})
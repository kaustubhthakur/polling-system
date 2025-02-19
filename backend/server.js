const express = require('express')
const app = express();
const port = 9000;
const cookieparser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require('cors')

const connection = async() =>{
    try {
    await mongoose.connect(process.env.MONGODB);
    console.log('db is running')
    } catch (error) {
        console.error(error);
    }
}


app.listen(port,() =>{
    console.log(`server is running on port ${port}...`)
})
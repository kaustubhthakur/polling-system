const express = require('express')
const app = express();
const port = 9000;
const cookieparser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require('cors')
const authrouter = require('./routes/auth')
const userrouter = require('./routes/users')
const queryrouter = require('./routes/queries')
const optionrouter = require('./routes/options')
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
connection();

app.use('/auth',authrouter)
app.use('/query',queryrouter)
app.use('/user',userrouter)
app.use('/options',optionrouter)
app.listen(port,() =>{
    console.log(`server is running on port ${port}...`)
})
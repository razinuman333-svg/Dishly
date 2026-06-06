const express = require('express')
const connectDB = require('./config/connectionDb')
const app = express()
require('dotenv').config()
const cors = require('cors')


const PORT = process.env.PORT || 3000
connectDB()
app.use(express.json())
app.use(cors())

app.use('/recipe',require('./routes/recipe'))
app.use('/',require('./routes/user'))

app.listen(PORT,(err)=>{
    console.log(`server connected to ${PORT}`)
})
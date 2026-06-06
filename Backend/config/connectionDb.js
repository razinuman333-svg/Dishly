  const mongoose = require('mongoose')
  const connectDB=async() =>{
    try{
       await mongoose.connect(process.env.CONNECTION_STRING)
    console.log("datbased connected....")
    }
    catch(err){
          console.log("datbased failed to connect",err.message)

    }
  

  }
  module.exports= connectDB
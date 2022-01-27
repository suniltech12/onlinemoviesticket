
  import express from "express"
  import mongoose from "mongoose"




  const Connection =async(username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@moviesticket.bpm0f.mongodb.net/DATABASES?retryWrites=true&w=majority`
  //  const URL="mongodb://localhost:27017/Ticket"
     try {
        await mongoose.connect(URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false
            });
            console.log("Database are sucessfully connected")
        
     } catch (error) {
         console.log("Error",error.message)
     }
    
    }

   export default Connection;
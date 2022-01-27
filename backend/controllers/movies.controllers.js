
import Movie from "../models/movies.models.js"


export const createMovies=async(req,res,next)=>{
     
    const movie=await Movie.create(req.body);
   
    res.status(201).json({
        success:true,
        message:"movie added",
        movie
    })
    }; 



export const getMovies=async(req,res)=>{
    try {
       const movies= await Movie.find({});
       res.json(movies);
    } catch (error) {
        console.log("error",error.message);
    }
 return
}
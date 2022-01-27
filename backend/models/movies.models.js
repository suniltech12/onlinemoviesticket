
import mongoose from "mongoose"

const movieSchema=new mongoose.Schema({
id:String,
url:String,
detailUrl:String,
name:Object,
description:String,
price:Object

})



const Movie=mongoose.model("movie",movieSchema );

export default Movie;
import React from "react"
import { movies } from "../../jsonData/data";
import { Box} from "@material-ui/core";
import ReactStars from "react-rating-stars-component"

import "./home.css"
const options ={
    edit:false,
    color:"rgba(20,20,20,0)",
    activeColor:"tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value:2.5,
    isHalf:true,

}
const Streaming = ()=>{
    
    return(
        <>
        {
          movies.map(movie=>(
            <Box className="productCard" to ={movie._id}>
            <img src={movie.images[0].url} alt={movie.name} />
            <p>{movie.name}</p>
            <div>
                <ReactStars {...options} /> <span>(256 Reviews)</span>
            </div>
            <span>{movie.price}</span>
            <button className="booking"><b>Booking</b></button>
          </Box>
           )) 
        }
        
        </>
    )
}

export default Streaming;
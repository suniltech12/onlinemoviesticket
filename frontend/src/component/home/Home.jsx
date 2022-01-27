
import React, { Fragment, useEffect } from "react"
import "./home.css"
import Streaming from "./Streaming"
 //import {movies} from "../../jsonData/data"
import { useDispatch, useSelector } from "react-redux"
import { getMovies} from "../../redux/actions/moviesAction"
const Home=()=>{

  
  const dispatch = useDispatch();
  const {movies} = useSelector(state=>state.getMovies);
  useEffect(()=>{
    dispatch(getMovies());
    
  },[dispatch])
    return(
        <Fragment>
          <h2 className="homeHeading">Online Streaming Events</h2>
           <div className="container" id="container" >
             <Streaming 
              movies={movies}
             />
           </div>
        </Fragment>
    )
}

export default Home;
import React from "react";
import Carousel from 'react-material-ui-carousel'

import {bannerData} from "../../jsonData/data"
import "./home.css"
const Banner=()=>{
    return(
      
             <Carousel
              
             autoPlay={true}
             animation = "slide"
             indicators ={false}
             navButtonsAlwaysVisible = {true}
             cycleNavigation = {true}
             navButtonsProps={{
                 style:{
                     background:"#ffffff",
                     color:"#494949",
                     borderRadius:0,
                     margin:0,
                    
                 }}
                }
              className="crouserdiv"

           
             >
                 
            {
                bannerData.map(image =>(
                    <img src={image} className="bannerImages" alt=""/>
                )  )
            }
        </Carousel>
        
    )
}

export default Banner;
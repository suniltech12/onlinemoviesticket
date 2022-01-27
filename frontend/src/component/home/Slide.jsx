import React from "react"
import "./home.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import {products} from "../../jsonData/data"
import { Box ,Typography} from "@material-ui/core";

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slide =({title})=>{
    return( 
     <Box className="mainhead">  
    <Box className="multislide">
        <Typography className="slidetextS"><b>{title}</b></Typography>
        <Carousel
        className="croser"
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet","mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
        {
 
        products.map(product =>(
            <Box textAlign="centre">
                <img src={product.url} className="bannerpruduct" alt=""/>
                <Typography className="pruducttext1">{product.title}</Typography>
                {/* <Typography className="pruducttext2">{product.discount}</Typography> */}
                <Typography className="pruducttext3">{product.tagline}</Typography>
              
            </Box>
        )  )
        }

        </Carousel>
        </Box> 
    </Box>
    )
}

export default Slide;
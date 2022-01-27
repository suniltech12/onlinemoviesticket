import {Box,Typography} from "@material-ui/core"
import "./header.css" 
const Childheader=()=>{
    return(
        <Box className="childHeader">
           
             <Box className="home">
                 <Typography className="texthome">Home</Typography>
             </Box>
             <Box className="Movies">
                 <Typography className="textMovies">Movies</Typography>
             </Box>
             <Box className="Showing">
                 <Typography className="textShowing">Now Showing</Typography>
             </Box>
             <Box className="Coming">
                 <Typography className="textComing">Up Coming</Typography>
             </Box>
             
        </Box>
    )
}

export default Childheader;
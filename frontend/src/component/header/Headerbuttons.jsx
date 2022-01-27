import React, {Fragment,  useState } from "react"
import {Box,Button} from "@material-ui/core"
import Login from "../login/Login"
import "./header.css"
const Headerbuttons=()=>{

    const [open,setOpen]=useState(false);

const openDialog=()=>{
  setOpen(true);
}
    return(
        <Fragment>
        <Box className="buttonheader">
            <Button variant="contained" className="login" onClick={()=>openDialog()}>Login</Button>
        </Box>
        <Login open={open}  setOpen={ setOpen} />
        </Fragment>
    )
}

export default Headerbuttons
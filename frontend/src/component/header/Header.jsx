import {AppBar,Toolbar, withStyles} from "@material-ui/core"

import "./header.css"
import Searchbar from "./Searchbar";
import Headerbuttons from "./Headerbuttons";
import Childheader from "./Childheader";
const Appbar = withStyles({
root:{
    background:"black"
}
})(AppBar)
const Header= ()=>{
    const logo = "//i.postimg.cc/MTTxHWrx/logo3.png";
    return(
        <>
       <Appbar className="header">
               <Toolbar> 
                  <img src={logo} className="imagelogo" alt=""/>
                   <Searchbar/>
                   <Headerbuttons />
               </Toolbar>
         </Appbar>
         <Childheader/>
       </>
    )
}

export default Header;
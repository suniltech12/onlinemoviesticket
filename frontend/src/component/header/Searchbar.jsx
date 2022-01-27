
import {InputBase} from "@material-ui/core"
import {Search} from "@material-ui/icons"


const Searchbar=()=>{
    return(
        <div className="search">
          
           
           <InputBase
            placeholder="Search movies"
            inputProps={{"aria-label":"search"}}
            className="inputclass"
           />
           <div className="searchIcon">
           <Search />
           </div>
        </div>
    )
}

export default Searchbar;
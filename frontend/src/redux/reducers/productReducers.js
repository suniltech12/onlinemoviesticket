

import * as avtionType from "../constants/moviesConstant"

export const  getProductResducer=(state={movies:[]},action)=>{
   switch(action.type){
     case avtionType.GET_MOVIES_SUCCESS:
       return {movies : action.payload}
     case avtionType.GET_MOVIES_FAIL:
        return {error : action.payload}
    default :
          return state
         
   }
};
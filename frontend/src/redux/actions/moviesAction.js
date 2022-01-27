
import axios from "axios"

import * as action from "../constants/moviesConstant";

const url = `http://localhost:8000`;
export const getMovies=()=> async(dispatch)=>{
     try {
        const {data} = await axios.get(`${url}/api/v1/allmovies`);
        console.log(data)
        dispatch({
            type:action.GET_MOVIES_SUCCESS,
            payload : data,
        })
        // console.log(movies);
     } catch (error) {
        dispatch({
            type:action.GET_MOVIES_FAIL,
            payload :error.response.data.message,
        })
     }
}
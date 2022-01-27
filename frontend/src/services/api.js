import axios from "axios";

const url = `http://localhost:8000`;

export const authSignUp =async(user)=>{
    
    try {
        return await axios.post(`${url}/api/v1/register/new`,user)
    } catch (error) {
        console.log("error while call sign Up api")
    }
   
}


export const authLogin=async(user)=>{
    try {
        return await axios.post(`${url}/api/v1/login`,user)
    } catch (error) {
        console.log("error while call login Up api")
    }
}
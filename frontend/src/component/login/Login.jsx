import React, { useState } from "react"
import {Box,  Dialog,DialogContent,TextField,Typography} from "@material-ui/core"
import "./login.css"
import {authSignUp,authLogin} from "../../services/api";

const initialValue = {
    login :{
       view : `login`,
       heading : `LOGIN`,
       SubHeading : `Booking Ticket  after login `
    },
    SignUp:{
        view : `SignUp`,
        heading : `Looks like your new here !`,
        SubHeading : `Sign Up with your moibile number tp get started `
    } 
}

const signUpIntial={
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
}
const loginIntial={
    username: "",
    password: "",
}
const Login=({open, setOpen})=>{

    const [account,setAcount]=useState(initialValue.login);
    const [signup,setSignup]=useState(signUpIntial);
    const [login,setLogin]=useState(loginIntial);
    const [error,setError]=useState(false);

   const loginUrl="https://i.postimg.cc/bwNfxvts/ttt.jpg"
    const handleClose=()=>{
        setOpen(false);
        setAcount(initialValue.login)
    }
const toggleAcount=()=>{
    setAcount(initialValue.SignUp)
}

 const signUpUser=async()=>{
   let response= await authSignUp(signup);
   if(!response) return;
   handleClose();
 }

 const loginAcount=async()=>{
    let response= await authLogin(login);
    if(!response){
        setError(true);
        return;
    }
    handleClose();
    setAcount(login.username)
 }

  const inputChange=(e)=>{
    setSignup({...signup, [e.target.name]:e.target.value })
    console.log("signup",signup)
  }
const valueChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
}

    return(
        <Dialog open={open} onClose={handleClose}>
             <DialogContent className="loginForm">
               <Box style={{display:"flex"}}>  
                <Box className="sliderbar">
                    <Typography className="heading1">{account.heading}</Typography>
                    <Typography className="heading2">{account.SubHeading} </Typography>
                    <img src={loginUrl} alt=""/>
                 </Box>

                   {
                       account.view === `login` ?
                       <Box className="headerbar" >
                       <TextField
                        name="username"
                        label="Enter Email/Mobile Number"
                         onChange={(e)=>valueChange(e)}
                       />
                       <TextField 
                       name="password"
                       label="Enter password"
                       className="password"
                       onChange={(e)=>valueChange(e)}
                       />
                        
                        {
                            error && <Typography className="error">Invalid Credentials</Typography>
                        }
                       <Typography className="headingtext">Be continue ,you agree to Booking Ticket term and condition</Typography>
                       <button variant="contained" className="loginButton" onClick={()=>loginAcount()}>Sign In</button>
                       <Typography className="or">OR</Typography>
                       <button variant="contained" className="request">Login to Facebook/Gmail</button>
                       <Typography onClick={()=>toggleAcount()} className="regsiter"> Create an account.</Typography>
                  </Box> :
                     <Box className="headerbar" >
                     <TextField
                      name="firstname"
                      label="Enter Firstname"
                       onChange={(e)=>inputChange(e)}
                     />
                     <TextField 
                     name="lastname"
                     label="Enter lastname"
                     onChange={(e)=>inputChange(e)}
                     />
                      <TextField
                      name="username"
                      label="Enter Username"
                      onChange={(e)=>inputChange(e)}
                     />
                     <TextField 
                     name="email"
                     label="Enter email"
                     onChange={(e)=>inputChange(e)}
                     />
                      <TextField
                      name="password"
                      label="Enter password"
                      onChange={(e)=>inputChange(e)}
                     />
                     <TextField 
                     name="phone"
                     label="Enter phone"
                     onChange={(e)=>inputChange(e)}
                     />
                   
                     <button variant="contained" className="request" onClick={()=>signUpUser()}>Submit</button>
                    
                     </Box>
                   }
                 
                </Box> 
             </DialogContent>
        </Dialog>
    )
}

export default Login;
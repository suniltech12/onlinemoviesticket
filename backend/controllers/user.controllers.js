
import User from "../models/user.models.js"

export const registerUser =  async(req,res) =>{
  try {

    const exist =await User.findOne({username:req.body.username});
    if(exist){
      return res.status(401).json("username aleardy exist");
    }
      const user = req.body;
      const newUser = new User(user);
     await newUser.save();
     res.status(201).json({
       success:true,
       message:"User register successfull"
     })
  } catch (error) {
      console.log("error",error)
  }
}


//login route
export const userLogin=async(req,res)=>{
     try {
         let user = await User.findOne(
           {
             username:req.body.username,
             password:req.body.password
            });
            if(user){
              return res.status(200).json(`${req.body.username} login successfull`);
            }else{
              return res.status(401).json("Invalid login");
            }
     } catch (error) {
      console.log("error",error)
     }
}
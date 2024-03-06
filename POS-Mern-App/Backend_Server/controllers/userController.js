const userModel=require('../models/userModel');

// login user items
const loginController=async(req,res)=> {
try{
    const {userId,password}=req.body;
const user=await userModel.findOne({userId,password,verified:true});
if(user){
  res.status(200).send(user);
}else{
   res.json({
    message:"login fail",
    user,
   })
}


}catch(err){
 console.log(err);
}
}

// register user
const registerController=async(req,res)=>{
try{
 const newUser=new userModel({...req.body,verified:true})
 await newUser.save()
 res.status(201).send("new user added successfully");
}catch(err){
    res.status(400).send("error",err)
  console.log(err);
}
}


module.exports={loginController,registerController};
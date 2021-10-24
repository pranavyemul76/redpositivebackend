const { response } = require('express')
const { message } = require('statuses')
const User = require('../Modules/User')

exports.userdata=(req,res)=>{
    try{
    User.find().then( response =>{res.json({user:response})})
    }
    catch{
        res.json({error:"error"})
    }
}
exports.userpost=(req,res)=>{
    try{
    const BodyReq=req.body;
    const username = BodyReq.username;
    const phone= BodyReq.phone;
    const email = BodyReq.email;
    const hobbies= BodyReq.hobbies;
     const UserObject = new User ({username:username,phone:phone,email:email,hobbies:hobbies});
     UserObject.save()
     .then( response => { res.status(200).json({messeage: "user add Successfully ", userdata:response} )  }
     
     )
     }
     catch(error){
         res.json({messeage:'error'})
     }

}


exports.userdelete= (req,res)=>{
    try{
    const email= req.params.email;
  User.deleteOne({email:email})
  .then(response => { res.status(200).json({messeage: "deleted  Successfully"})}
  )
  .catch(err => console.log(err)
   )
  }

catch (error){
  res.json({error:error})
}
}
exports.userupdate= async(req,res)=>{
    try{
    console.log(req.body.id)
   const user=await User.findOneAndUpdate({_id:req.body.id}, {$set:{username:req.body.username,phone:req.body.phone,email:req.body.email,hobbies:req.body.hobbies}})
   .then(response => { res.status(200).json({ messeage: "Update  Successfully"})}
  )
    }
    catch (error){
        res.json({messeage:error})
    }
}       
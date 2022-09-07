const { response } = require('express');
var Userdb = require('../model/model');
const mongoose = require('mongoose')

exports.create= async (req, res)=>{
try{
    if(!req.body){
    res.status(400).send({message:"Content can not be empty!"});
    return;
}
// res.render('addNewEmployee',{data:getUser})
 const user =  new Userdb({
    name:req.body.name,
    email:req.body.email,
    address:req.body.address,
    phone:req.body.phone

 })
const newUser = await user.save()
if(newUser){
    res.redirect("/")
}

    }

    catch(err){
        console.log (err);
    };
    // res.redirect(200,"/index")

}

exports.findUser= async (req,res, next)=>{
   try{ const getUser=await Userdb.find()
   res.render('index',{data:getUser})
    // res.status(200).json({
    //     status: 'success',
    //     data: getUser
        
    //   });
    }

    catch(err){
        console.log (err);
    }
    next();

}

exports.findOneUser= async (req,res, next)=>{
    try{ 
        const id= req.params.id;
        const getOneUser=await Userdb.findById(id)
     res.status(200).json({
         status: 'success',
         data: {
           getOneUser
         }
       });
     }
 
     catch(err){
         console.log (err);
     }
     next();
 
 }



exports.uupdate = async (req,res)=>{
   
   console.log(req.body);
    try{
        let checkedItem = req.body.id;  
         if (!mongoose.Types.ObjectId.isValid(checkedItem)) 
         {     checkedItem = checkedItem.replace(/\s/g, '');   }
        const updateUser = await Userdb.findByIdAndUpdate(checkedItem, { 
            name : req.body.name,
            email : req.body.email,
            address  : req.body.address,
            phone : req.body.phone,

         },
         );
        
   
          if(updateUser){
        res.redirect("/") 
       
        }
       
}
    catch(err){
        console.log(err)
    }
   
}

exports.delete= async (req, res)=>{
     try{
        let id = req.body.id;  
         if (!mongoose.Types.ObjectId.isValid(id)) 
         {     id= id.replace(/\s/g, '');   }
        // const id= req.body.id;
        const deleteUser= await Userdb.findByIdAndDelete(id)
        if(deleteUser){
            res.redirect("/") 
           
            }
  }
     catch (err){
        console.log(err)
     }
     

}
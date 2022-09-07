const { default: axios } = require('axios');
const { response } = require('express');
var Userdb = require('../model/model');


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



exports.update = async (req,res)=>{
   
   console.log(req.body);
    try{
        // const id= req.params.id;
        // const updateUser= await Userdb.findOneAndUpdate({"_id":req.body.id},{
        //     "$set":{"name":req.body.name,
        //    "email":req.body.email,
        //     "address":req.body.address,
        //     "phone":req.body.phone

        //     },
          

        // },
        //   {
        //         new:true,
        //     },
        // )
        const updateUser= await Userdb.findByIdAndUpdate(req.body.id, { 
            name:req.body.name,
            email:req.body.email,
            address:req.body.address,
            phone:req.body.phone,

         });
        
   
          if(updateUser){
        //  res.redirect("/")
        console.log('success');
        }
       
}
    catch(err){
        console.log(err)
    }
   
}

exports.delete= async (req, res, next)=>{
     try{
        const id= req.params.id;
        const deleteUser= await Userdb.findByIdAndDelete(id)
        res.status(200).json({
            status: 'success',
            data: {
              deleteUser
            }
          });
  }
     catch (err){
        console.log(err)
     }
     next();

}
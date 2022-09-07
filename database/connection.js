const mongoose = require('mongoose');

const connect= async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL,{ 
            useNewUrlParser: true
        }) 
        console.log('mongoDB connection sucesses.')
     } catch(err){
            console.log(err);
            process.exit(1);
        }
    }
    
module.exports = connect
//  require('./employee.model');
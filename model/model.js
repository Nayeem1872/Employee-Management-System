const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type: Number,
        required:true,
        unique: true
    }
})

const Userdb = mongoose.model('Userdb',schema);
// module.exports = mongoose.model('userdb',schema);

module.exports = Userdb;
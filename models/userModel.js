const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        unique: false,
    },
    lastName:{
        type : String,
        required : false,
        unique : false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});



module.exports = mongoose.model('users', userSchema,"Users");



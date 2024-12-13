const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique: true },
    password:{type:String,required:true},
    createdOn:{type:Date,default:new Date().getTime()}
});

const User = mongoose.model("User",userSchema);

module.exports = User;
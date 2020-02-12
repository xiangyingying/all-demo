const mongoose=require('./db')
var AdminSchema=new mongoose.Schema({
    name:String,
    age:Number
})
var Admin=mongoose.model('Admin',AdminSchema,'admin')
module.exports=Admin
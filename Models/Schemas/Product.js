const mongoose=require('mongoose')
const Schema=mongoose.Schema

const ProductSchema=new Schema({
    _id:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
        maxlength: 100
    },
    variant:{
        type:String,
        required:true,
        maxlength: 100
    }
});

module.exports=ProductSchema
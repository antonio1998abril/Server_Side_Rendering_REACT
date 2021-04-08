const mongoose=require('mongoose')
const assert =require ('assert')
const Schema=mongoose.Schema;

const ProductSchema=require('./Product')


const ReviewsSchema=new Schema({
    score:{
        type:Number,
        //validate:[score,'Error, Number has to be less of 5'],
        min:1,
        max:5,
    },
    comments:{
        type:String,
        required:true,
        maxlength: 350,
    },
    product:ProductSchema,
    
    hidden:{
        type:Boolean,
        default:true
    },
    order:{
        type:Number,
        required:false,
        default:1
    }

}) 

/* function score(){
    return this.score <= 5
}*/

module.exports=ReviewsSchema
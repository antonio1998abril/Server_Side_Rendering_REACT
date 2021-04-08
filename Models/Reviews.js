const mongoose=require('mongoose')
const Review_Schema=require('./Schemas/Review')

module.exports=mongoose.model('Product', Review_Schema)
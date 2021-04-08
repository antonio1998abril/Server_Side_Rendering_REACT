const express=require('express')
const review_controller=require('./Controllers/Review')

    const routes = {
        review: express.Router()
            .get('/get', review_controller.Index)
            .post('/post', review_controller.Store)
            .delete('/delete/:id', review_controller.Delete) 
            .put('/update/:id', review_controller.Update)

            //get only one review
            .get('/getReview/:id', review_controller.Show)
    }
module.exports=routes

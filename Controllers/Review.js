const ReviewModel=require('../Models/Reviews');

const controller = {
    Index: async (req, res, next) => {
        await ReviewModel.find().lean().then(function(data){
            res.send(data);
        }).catch(next);
            
    },

    Store : async (req, res, next) => {
        const getReview = req.body
        const score = getReview.score
        const comments = getReview.comments
        const type = getReview.product.type
        const variant = getReview.product.variant
           
        const newReview = new ReviewModel({
            score : score,
            comments : comments,
            product : {
            _id : getReview.product._id,
            type : type,
            variant : variant
                }
            });

            newReview.save().then(function(){
                return res.status(200).json(newReview) 
            }).catch (next)
    },

    Delete : async (req, res, next) => {
        await ReviewModel.findByIdAndDelete(req.params.id).then(function(){
            res.json({msg:"Review Deleted"})
        }).catch (next)
    },

    Update : async(req, res, next) => {
        const {score, comments} = req.body

        const condition={
            _id : req.params.id
        }
        const newValues = {
            score:score,
            comments:comments
        }

        ReviewModel.findByIdAndUpdate(condition,newValues,{runValidators:true}).then(function(){
            return res.status(200).json({msg:'validated'}) 
        }).catch (next)
         
    },

    Show : async(req, res ,next) => {
        const id=req.params.id
         await ReviewModel.findById({_id:id}).then(function(data){
            res.send(data)
        }).catch (next) 
    }
}

module.exports=controller
/* another test */
/*     let error = newReview.validateSync();
        if(error)
        return res.status(400).json({msg:"error"})  */
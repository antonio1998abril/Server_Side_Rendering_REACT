/* import {useRouter} from "next/router"; */
import axios from 'axios';
import React, { useState,useContext } from 'react';
import ReactStars from "react-rating-stars-component";
import { useRouter } from 'next/router'

import { GlobalState } from '../../components/Global/GlobalState';



const Review = ({ data }) =>{
    
    const initialReview={
        comments: data.comments,
        score : data.score,
        product :{ 
            _id: "2ee",
            type: "shoes",
            variant: "2"
        }
    }
    const state=useContext(GlobalState)
 
    const [callback,setCallback]=state.shopify.callback

    const [review,setReview]=useState(initialReview)
    const router = useRouter();
   
    //const {review} = router.query 

    const ratingChanged = (newRating) => {
        setReview({...review,score:newRating})
      };

      const handleSubmit = async (e ,next) => {
        e.preventDefault()
        console.log(data._id)
          /*   await axios.put(`http://localhost:3000/api/update/${review._id}`,{...review}).catch (next) */

            const newReview=JSON.stringify({...review})
            await axios.request({
                method:'PUT',
                url:`/api/update/${data._id}`,
                data: newReview,
                headers:{
                 'Content-Type': 'application/json'
                },
            }).catch (next)
            setCallback(!callback)
            
        }

    return (
        <div>
        <form onSubmit={handleSubmit} method="POST"> 
            <label htmlFor="name">Leave a Comment: </label>
                <input  
                    type="text" 
                    name="comments" 
                    id="comments"
                    value={review.comments}
                    required onChange={e => setReview({...review,comments:e.target.value })}></input> 
                <br/> 

            <label htmlFor="name">Set a new score: </label>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        value={review.score}
                    />
                    <br/> 
            <button className="custom big-button" type="submit" > Update</button>
        </form>
    </div>
    )
}

  Review.getInitialProps = async ({query}) => {
    const res = await axios.get(`/api/getReview/${query.review}`);
    const { data } = res;
    return { ...query,data:data };
  };  
  
export default Review;


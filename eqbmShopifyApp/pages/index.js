import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useContext, useState} from 'react';
import { GlobalState } from '../components/Global/GlobalState';
import Review from './review'
import ReactStars from "react-rating-stars-component";
import axios from 'axios';

const initialReview={
  comments: '',
  score : '',
  product :{ 
      _id: "2ee",
      type: "shoes",
      variant: "2"
  }
}

function Home() {
  const state=useContext(GlobalState)
  const [reviews]=state.shopify.reviews
  const [callback,setCallback]=state.shopify.callback
  /* POST */
  const [review,setReview]=useState(initialReview)

  /* CRUD */
  /* POST */
  const handleSubmit = async (e ,next) => {
      e.preventDefault()

          const newReview=JSON.stringify({...review})
          await axios.request({
              method:'POST',
              url:'/api/post',
              data: newReview,
              headers:{
               'Content-Type': 'application/json'
              },
          }).catch (next)
      setCallback(!callback)
  }
  const ratingChanged = (newRating) => {
      setReview({...review,score:newRating})
    };

    /* DELETE */
    const deleteReview=async(id)=>{
        const deleteReview=axios.delete(`/api/delete/${id}`)
        await deleteReview
        setCallback(!callback)
    }

  return (
     <>
        <h1>index</h1>
            {
               reviews.map(review=>{
                return <Review key={review._id} review={review} deleteReview={deleteReview}/>
               })
            }

        <h3>Comment Section: </h3>
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

                <label htmlFor="name">score: </label>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <br/> 
                <button className="custom big-button" type="submit" > Create</button>
            </form>
        </div>
        </>
  )
}
export default Home
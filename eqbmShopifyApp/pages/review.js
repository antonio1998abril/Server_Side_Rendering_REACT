import React from 'react'
import Link from 'next/link';
import ReactStars from "react-rating-stars-component";

function review({review, deleteReview}) {
    return (
        <div>
          <ul>
            <li>
                <span>Comment: {review.comments} </span> <br></br>
                <span>Score: {review.score} </span> 
                    <ReactStars  
                        size={24}
                        value={review.score}
                        edit={false}
                    />
                    <button onClick={()=>deleteReview(review._id)}>Delete</button>
                    <div>
                        <Link href="/review/[review]" as={`/review/${review._id}`}>
                            <a> Update</a>
                        </Link>
                    </div>
                </li>
            </ul>      
        </div>   
    )
}
export default review

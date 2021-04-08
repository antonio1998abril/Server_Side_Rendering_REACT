import {useEffect, useState } from 'react'
import Axios from 'axios'

function shopify() {
    const [reviews,setReviews]=useState([]);
    const [callback,setCallback]=useState(false)

    useEffect(() =>{
        const getReviews = async () => {
            const res = await Axios.get('/api/get')
            setReviews(res.data)  
        }
        getReviews()   
    },[callback])



    return {
        callback:[callback,setCallback],
        reviews:[reviews,setReviews]
    }
}

export default shopify


//http://localhost:3000/api/get
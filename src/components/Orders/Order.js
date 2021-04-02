import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



import './Order.css'
import OrderData from './OrderData';



const Order = () => {
    const {id} =useParams();
    const [books, setBook] = useState([])

    

    useEffect(() =>{
        const url = `https://pure-cove-97657.herokuapp.com/book/${id}`;
        fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data[0]))
        .then(data => setBook(data[0]))
        ;
    }, [id])
    return (
        <div>
           
                 
            <OrderData books={books}>

            </OrderData>
             
             
          </div>
          
    );
};

export default Order;
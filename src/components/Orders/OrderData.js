import React from 'react';
import { Link } from 'react-router-dom';

const OrderData = (props) => {
    // console.log(props);
    const {name, price,_id} = props.books
    const bookStyle = {backgroundColor:'white' , color:'tomato',border: '1px solid gray', borderRadius:'20px',margin:'3px', padding:'30px'}
    const priceStyle = { marginLeft: '55%'}
   

    return (
        <div  className="row d-flex align-items-center p-4" >
            
            <div class="col-md-8" style={bookStyle}>
                <h1 className="dollar">OrderId {_id}</h1>
                 <h3 >Book 
                     </h3>
                     <small>
                     {name}</small>
                 
                 <b className="dollar" style={priceStyle}>
                 Quantity: 1
                  <br/>Price:{price}</b>
                 
                 <br/>
                 <Link to="/deals">
                 <button className="btn btn-danger"
                > <b>Place Order </b></button>
                </Link>
                 
            </div>
            
        </div>
    );
};


export default OrderData;
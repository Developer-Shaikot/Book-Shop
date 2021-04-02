import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = (props) => {
    // console.log(props);
    const {name, price,imageURL,_id} = props.book;
    const bookStyle = {backgroundColor:'white' , color:'black',border: '1px solid gray', borderRadius:'20px',margin:'30px', padding:'35px'}
    const imageStyle = {hight:'30px', width:'120px', borderRadius:'6px'}


   

    return (
        <div className="col-md-3" style={bookStyle}>
               <div className="teams" className="App"  >
            <img style={imageStyle} src={imageURL} alt=""/>
            <h3 className="writer" >{name}</h3>
            <div>
            <Link to={`/order/${_id}`}>
                <button className="btn btn-danger"
                > <b>  Order Now</b></button>
                </Link>
              <b className="dollar">Price = {price}</b>
            </div>
        </div>
        </div>
    );
};

export default Book;
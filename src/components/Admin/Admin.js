import React, { useState } from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null);

    const locationBoxStyle = { 
        backgroundColor:'aliceblue' , color:'purple',border: 'none', borderRadius:'20px',margin:'50px', 
        padding:'30px',
        textAlign:'center',
        textDecoration:'none'
    }

  const onSubmit = data => {
      const bookData = {
          name: data.name,
          price:data.price,
          imageURL: imageURL
      }
      const url = `http://localhost:5056/admin`

      
      fetch(url, {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(bookData)
      })
      .then(res => console.log ('server side response',res))
    ;}


  const handleImageUpload = event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'c0ff542b5a259d5519c36fdec59edd85');
    imageData.append('image',event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });


  }
    return (
        <div>
        <Header />
    <div className="row d-flex p-2" style={{textAlign: 'center'}} className="side-container">
        
        <div  className="bar-container">
        <h1 className="title">
            Book Shop
        </h1>
        <a className="theme" href="/manage">Manage books</a>
        <br/>
        <a className="theme" href="/add">Add Books</a>
        <div className="manage-side">
       
        </div>
        </div>
        <div className="orders-container">
            <h1>Add Your Awesome Books Here</h1>
        <form style={locationBoxStyle} className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
        Name
      <input className="form-control"  name="name" defaultValue="" ref={register} />
      <br/>
      Price<input className="form-control"  name="price" defaultValue="" ref={register} />
      <br/>
      Upload Books Picture
      <input className="form-control"  name="exampleRequired" type="file" onChange={handleImageUpload} />
        <br/>
      <input  className="form-control bg-success" type="submit" />
    </form>
        </div>
    </div>
    </div>
    );
};

export default Admin;
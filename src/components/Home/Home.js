import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Header from '../Header/Header';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    
    const [books, setBooks] = useState([])

   

    useEffect(() => {
        fetch('https://pure-cove-97657.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])


    return (
        <div>
            <Header />
            <div className="row d-flex align-items-center p-5" >
            {
                books.map(book =><Book 
                    
                    book={book}>
                    </Book>)
            }
        </div>
        </div>
    );
};

export default Home;
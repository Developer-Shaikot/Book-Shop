import React from 'react';
import { useParams } from 'react-router';
import './Header.css'

const Header = () => {
    const {id} =useParams();
    return (
        <div className="bg">
        <header className="container">
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
                <div className="container-fluid">
                    <p className="navbar-brand">
                        Book Shop
                    </p>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                      </button>
                         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                          <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                              <a         className="nav-link"  href={`/order/${id}`}>Orders</a> 
                              <a className="nav-link"                   href="/admin">Admin</a>
                              
                           <a className="nav-link" href="/login" tabIndex="-1" aria-disabled="true">Login</a>  

                        </div>

                    </div>
                </div>
            </nav>
                
        </header>
        
    </div>
    );
};

export default Header;
import React, { useState } from 'react';
import Navbar from '../../shared/Navbar/Navbar'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (
        <header className="header">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="header-content text-center">
                            <h1 className="title">Exclusive furniture on cheap price</h1>
                            <p className="subtitle">Make your house a home with our wide collection of beautiful furniture</p>
                            <div className="search-option d-flex justify-content-center px-5">
                                <input type="text" className="form-control search-field" placeholder="Search your products from here" />
                                <button className="search-btn btn d-flex align-items-center justify-content-between"><FontAwesomeIcon className="me-2" icon={faSearch} /> Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </header >
    );
};

export default Header;
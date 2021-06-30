import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Navbar = ({ color }) => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ background: color }}>
            <div className="container">
                <Link className="navbar-brand navbar-name common-color" to="/">Bazar</Link>
                <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link navlink active" to="/">Offer</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link navlink" to="/help"><FontAwesomeIcon className="me-1" icon={faQuestionCircle} /> Need Help</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link navlink join-button" to="/">Join</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a className="navbar-brand navbar-name common-color" href="#">Bazar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link navlink active" aria-current="page" href="#">Offer</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navlink" href="#"><FontAwesomeIcon className="me-1" icon={faQuestionCircle} /> Need Help</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navlink join-button" href="#">Join</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
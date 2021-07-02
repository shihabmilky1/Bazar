import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { ApplicationProvider } from '../../../App';
import { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import UserIcon from '../../../images/user.png'
import toast from 'react-hot-toast';
const Navbar = ({ color, sticky }) => {
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider)
    const handleUserSignOut = () => {
        firebase.auth().signOut().then(() => {
            setUser(null)
            toast.error('Logged Out')

        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <nav className={`navbar navbar-expand  ${sticky ? 'fixed-top shadow bg-white' : 'shadow-sm'}`} style={{ padding: sticky ? '1px' : '', transition: '.2s' }}>
            <div className="container">
                <Link className="navbar-brand navbar-name common-color" to="/">Bazar</Link>
                <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link navlink active" to="/">Offer</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link navlink" to="/help"><FontAwesomeIcon className="me-1" icon={faQuestionCircle} /> Need Help</Link>
                        </li>
                        {!user?.email && <li class="nav-item">
                            <Link className="nav-link navlink join-button" to="/signup">Join</Link>
                        </li>}
                        {user?.email && <li class="nav-item dropdown navlink pe-5">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={user.photoURL ? user.photoURL : UserIcon} className="img-fluid user-icon" alt="" />
                            </a>
                            <ul className="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item dropdownlink ms-2 pe-4 my-3" to="/">Profile</Link></li>
                                <li><Link className="dropdown-item dropdownlink ms-2 pe-4 my-3" to="/">Your Order</Link></li>
                                <li><Link className="dropdown-item dropdownlink ms-2 pe-4 my-3" to="/terms">Terms and Service</Link></li>
                                <li><Link className="dropdown-item dropdownlink ms-2 pe-4 my-3" to="/privacy">Privacy Policy</Link></li>
                                <li><span onClick={handleUserSignOut} className="dropdown-item dropdownlink ms-2 pe-4 my-3" >Logout</span></li>
                            </ul>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
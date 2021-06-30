import React, { useContext } from 'react';
import { ApplicationProvider } from '../../../App';

const CartButton = () => {
    const [cart, setCart] = useContext(ApplicationProvider)
    const cartTotal = cart.reduce((total, cart) => total + parseInt(cart.price), 0)
    const cartTotalDiscount = cart.reduce((total, cart) => total + parseInt(cart.discount), 0)
    return (
        <div className="CartButton">
            <div className="d-flex justify-content-between align-items-center items-count">
                <i className="fal fa-shopping-cart card-icon"></i>
                <p>{cart.length} item</p>
            </div>
            <button className="btn btn-card">${cartTotal - cartTotalDiscount}</button>
        </div>
    );
};

export default CartButton;
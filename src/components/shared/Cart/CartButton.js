import React, { useContext, useState } from 'react';
import { ApplicationProvider } from '../../../App';
import CheckoutSidebar from './CheckoutSidebar'

const CartButton = () => {
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider)
    const [checkoutSidebarOpen, setCheckoutSidebarOpen] = useState(false)
    const cartTotal = cart.reduce((total, cart) => total + parseInt(cart.price), 0)
    const cartTotalDiscount = cart.reduce((total, cart) => total + parseInt(cart.discount), 0)
    return (
        <>
            <div className="CartButton" onClick={() => setCheckoutSidebarOpen(true)}>
                <div className="d-flex justify-content-between align-items-center items-count">
                    <i className="fal fa-shopping-cart card-icon"></i>
                    <p>{cart.length} item</p>
                </div>
                <button className="btn btn-card">${cartTotal - cartTotalDiscount}</button>
            </div>
            <CheckoutSidebar checkoutSidebarOpen={checkoutSidebarOpen} setCheckoutSidebarOpen={setCheckoutSidebarOpen} />
        </>
    );
};

export default CartButton;
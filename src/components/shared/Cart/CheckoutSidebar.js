import React, { useContext } from 'react';
import { ApplicationProvider } from '../../../App';
import './CheckoutSidebar.css'
import NotFound from '../../../images/not-found.PNG'
import CartItem from './CartItem'
import { Scrollbars } from 'react-custom-scrollbars-2';


const CheckoutSidebar = ({ checkoutSidebarOpen, setCheckoutSidebarOpen }) => {
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider);
    const totalAmount = cart.reduce((total, cart) => total + parseInt(cart.price), 0)
    const totalDiscountAmount = cart.reduce((total, cart) => total + parseInt(cart.discount), 0)
    return (
        <div className="checkout-sidebar shadow"
            style={{ transform: `${checkoutSidebarOpen ? 'translateX(0)' : 'translateX(100%)'}` }}
        >
            <div className="checkout-sidebar-header d-flex align-items-center justify-content-between"
            >
                <div className="item-count d-flex align-items-center">
                    <i class="fas fa-cart-plus"></i>
                    <p className="my-0">{cart.length} item</p>
                </div>
                <div className="close-btn">
                    <i onClick={() => setCheckoutSidebarOpen(false)} class="fal fa-times"></i>
                </div>
            </div>
            <div className="checkout-sidebar-main h-100">
                {cart.length
                    === 0
                    ? (
                        <div className="item-empty d-flex align-items-center justify-content-center mt-5">
                            <div>
                                <img src={NotFound} className="imf-fluid" alt="" />
                                <p>No Products Found</p>
                            </div>
                        </div>
                    ) : (
                        <Scrollbars>
                            {cart.map(product => <CartItem product={product} />)}
                        </Scrollbars>

                    )
                }
            </div>
            <div className="checkout-sidebar-bottom">
                <div className="btn checkout-btn d-flex justify-content-between align-items-center">
                    <p className="my-0">Checkout</p>
                    <button className="price-button btn btn-card">$ {totalAmount - totalDiscountAmount}</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSidebar;
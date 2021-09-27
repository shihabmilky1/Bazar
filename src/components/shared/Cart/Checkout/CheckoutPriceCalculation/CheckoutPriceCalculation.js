import React, { useContext } from 'react';
import { ApplicationProvider } from '../../../../../App';
import { Scrollbars } from 'react-custom-scrollbars-2';
import NotFound from '../../../../../images/Not-Found-another-bg.PNG'

const CheckoutPriceCalculation = () => {
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider)
    const totalPrice = cart.reduce((total, cart) => total + parseInt(cart.price), 0)
    const discountTotalPrice = cart.reduce((total, cart) => total + parseInt(cart.discount), 0)
    return (
        <div className="order-detail">
            <h6 className="text-center mb-4 mt-4 mt-md-0">Your Order</h6>
            {cart.length <= 0
                && (
                    <div className="my-3 d-flex flex-column align-items-center">
                        <img src={NotFound} alt="" />
                        <span className="not-found-title">No Product Found</span>
                    </div>
                )}
            {cart.length > 0
                &&
                (<div className="order-list">
                    <Scrollbars>
                        {cart.map((product) => (
                            <div className="d-flex align-items-center justify-content-between order-items-count">
                                <span className="line-clamp">{product.name}</span>
                                <span>${parseInt(product.price - product.discount)}</span>
                            </div>
                        ))}
                    </Scrollbars>
                </div>
                )}
            <div className="product-total">
                <div className="d-flex align-items-center justify-content-between my-2">
                    <span className="">Subtotal</span>
                    <span>${totalPrice - discountTotalPrice}</span>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                    <span className="">Delivery Fee</span>
                    <span>0</span>
                </div>
                <div className="d-flex align-items-center justify-content-between my-2">
                    <span className="">Discount</span>
                    <span>0</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3 fw-bold">
                    <span className="">Total</span>
                    <span>${totalPrice - discountTotalPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPriceCalculation;
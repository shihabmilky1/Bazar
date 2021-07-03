import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import CheckoutPriceCalculation from './CheckoutPriceCalculation/CheckoutPriceCalculation';
import './Chekout.css'
import ShipmentField from './ShipmentField/ShipmentField';

const Checkout = () => {
    return (
        <section className="Chekout-section">
            <Navbar sticky={true} />
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <ShipmentField />
                    </div>
                    <div className="col-md-4 mx-auto">
                        <CheckoutPriceCalculation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
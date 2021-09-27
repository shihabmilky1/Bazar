import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ApplicationProvider } from '../../../../../App';
import PaymentProcess from '../../Payment/PaymentProcess/PaymentProcess';
import AddShipmentAddress from '../AddShipmentAddress/AddShipmentAddress'
import swal from 'sweetalert'

const ShipmentField = () => {
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [shipmentData, setShipmentData] = useState(null);
    const [isSubmitAddress, setIsSubmitAddress] = useState(null);
    const [deliveryService, setDeliveryService] = useState('90 min express delivery');
    const [paymentOption, setPaymentOption] = useState('');
    const history = useHistory()


    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const onSubmit = data => {
        if (data) {
            setShipmentData(data)
            setIsOpen(false);
        }
    };
    const handlePaymentStatus = (paymentID, card) => {
        const orderDetail = {
            userEmail: user.email,
            username: user.displayName,
            shipmentData,
            paymentID,
            date: new Date(),
            deliveryService,
            cart: cart,
            paymentSystem: card,
            process: 'Pending',
            step: 0
        }
        fetch('https://intense-reef-39470.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetail)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    swal("Payment Success!", "", "success");
                    setCart([])
                    history.push('/orders')
                }
            })
    }
    const handleIsSubmittedAddress = () => {
        setIsSubmitAddress(shipmentData)
    }
    const handleDeliverySystem = (service) => {
        setDeliveryService(service)
    }
    return (
        <section>
            <div className={isSubmitAddress ? 'd-none' : 'd-block'}>
                <div className="address-section p-4 shadow bg-white my-4">
                    <div className="header-section d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4 className="header-number">1</h4>
                            <h5 className="ms-4">Delivery Address</h5>
                        </div>
                        <span className="add-button common-color" onClick={openModal}>
                            <i className="fal fa-plus me-2"></i> Add Address
                        </span>
                    </div>
                    {shipmentData
                        && (
                            <div onClick={openModal} className="shipment-address-data delivery-address-active">
                                <h6>{shipmentData?.name}</h6>
                                <p>{shipmentData?.address}</p>
                            </div>
                        )
                    }
                </div>
                <div className="address-section p-4 shadow bg-white my-4">
                    <div className="header-section d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4 className="header-number">2</h4>
                            <h5 className="ms-4">Delivery Schedule</h5>
                        </div>
                    </div>
                    <div className="delivery-information">
                        <div onClick={() => handleDeliverySystem('90 min express delivery')} className={deliveryService === '90 min express delivery' ? "m-3 shipment-address-data  delivery-service-active" : "m-3 shipment-address-data "}>
                            <h6>Express-Delivery</h6>
                            <p>90 min express delivery</p>
                        </div>
                        <div onClick={() => handleDeliverySystem('Next Day')} className={deliveryService === 'Next Day' ? "m-3 shipment-address-data delivery-service-active" : "m-3 shipment-address-data"}>
                            <h6>Next Day</h6>
                            <p>Next Day</p>
                        </div>
                    </div>
                </div>
                <div className="address-section p-4 shadow bg-white my-4">
                    <div className="header-section d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center justify-content-between">
                            <h4 className="header-number">3</h4>
                            <h5 className="ms-4">Phone Number</h5>
                        </div>
                        <span className="add-button common-color" onClick={openModal}>
                            <i className="fal fa-plus me-2"></i> Add Address
                        </span>
                    </div>
                    {shipmentData
                        && (
                            <div className="shipment-address-data delivery-address-active">
                                <h6>Number</h6>
                                <p>{shipmentData?.phone}</p>
                            </div>)
                    }
                </div>
                <div className="submit-shipment-address payment-button" >
                    <button onClick={handleIsSubmittedAddress} className={shipmentData ? 'btn' : 'btn disabled'}>Submit Address</button>
                </div>
            </div>

            {/* Stripe Payment */}
            <div className={isSubmitAddress ? "address-section p-4 shadow bg-white my-4 d-block" : 'd-none'}>
                <div className="header-section d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="header-number">4</h4>
                        <h5 className="ms-4">Payment Option</h5>
                    </div>
                </div>
                {cart.length > 0 &&
                    <div style={{ marginTop: '15px', display: paymentOption ? 'none' : 'block', }}>
                        <i class="fas fa-credit-card" onClick={() => setPaymentOption('stripe')} style={{ fontSize: '100px', color: '#6772E5', margin: '20px', cursor: 'pointer' }}></i>
                    </div>
                }
                {paymentOption === 'stripe' && <PaymentProcess handlePaymentStatus={handlePaymentStatus} />}
                {/* <PaymentProcess handlePaymentStatus={handlePaymentStatus} /> */}
                {
                    cart.length <= 0 &&
                    <div className="">
                        <h5 className="mt-3 text-center">Your Cart is Empty</h5>
                    </div>
                }
            </div>
            <AddShipmentAddress modalIsOpen={modalIsOpen} closeModal={closeModal} onSubmit={onSubmit} shipmentData={shipmentData} />
        </section>
    );
};

export default ShipmentField;
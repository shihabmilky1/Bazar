import React, { useContext, useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { ApplicationProvider } from '../../../../../App';

const PaymentCard = ({ handlePaymentStatus }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider)


    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod, paymentIntent } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.log('[error]', error);
            setPaymentSuccess(null)
            setPaymentError(error.message)
        } else {
            const { id } = paymentMethod;
            fetch('https://intense-reef-39470.herokuapp.com/payments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, cart })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        console.log('[PaymentMethod]', paymentMethod, 'data', data);
                        setPaymentError(null)
                        setPaymentSuccess(paymentMethod.id)
                        handlePaymentStatus(paymentMethod.id)
                    }
                })
        }
    };
    return (
        <form onSubmit={handleSubmit} className="p-4">
            <CardElement />
            <button type="submit" className="btn btn-danger mt-4" disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}

export default PaymentCard;

import React, { useContext, useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { ApplicationProvider } from '../../../../../App';
import toast from 'react-hot-toast';

const PaymentCard = ({ handlePaymentStatus }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)
    const [cart, setCart, user, setUser] = useContext(ApplicationProvider)
    const total = cart.reduce((total, cart) => total + parseInt(cart.price), 0)

    const handleSubmit = async (event) => {
        const loading = toast.loading('Please Wait')
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            setPaymentSuccess(null)
            toast.dismiss(loading)
            toast.error(error.message)
            setPaymentError(error.message)
        } else {
            const { id } = paymentMethod;
            fetch('https://fast-sierra-30803.herokuapp.com/payments', {
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
                        handlePaymentStatus(paymentMethod.id, paymentMethod.card.brand)
                        toast.dismiss(loading)
                    }
                })
                .catch(err => console.log(err))
        }
    };
    return (
        <form onSubmit={handleSubmit} className="p-4">
            <CardElement />
            <button type="submit" className="btn btn-danger mt-4" disabled={!stripe}>
                Pay {'$' + total}
            </button>
        </form>
    )
}

export default PaymentCard;

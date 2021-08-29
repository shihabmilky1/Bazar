import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCard from './../PaymentCard/PaymentCard';
const stripePromise = loadStripe('pk_test_51IeGgvCvYK065ALopgI9UsyqdYrPK6sLYRCwbJuXYyjsOB9cgmy4aXw25s762TIfEBvbiWCLUJrkt7nPqinvLpqo00IerrByYs');

const PaymentProcess = ({ handlePaymentStatus }) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCard handlePaymentStatus={handlePaymentStatus} />
        </Elements>
    )
}

export default PaymentProcess

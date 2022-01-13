import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51KGm2OGtRd0EwsQEjGaVGm2yF56TUqgHZt68LiOu55riIj0zouQw9xxfwJqRCfTuBfbnZxp1yHjrf4pleHIiu0kA00l9QS4YSP')

export default function Payment() {

    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://doctor-portal-server-withextra.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId])
    return (
        <div>
            <h2>Please pay for : {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: {appointment.price}</h4>
            {appointment.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    )
}
/*

1.install stripe and stripe-react
2.set Publishable key
3.Elements
4.Checkout Form
----------------
5.Create payment method
6.server create payment intent api
7.Load client secret
8.ConfirmCard payment
9.handle user error

*/
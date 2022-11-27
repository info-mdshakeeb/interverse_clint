
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import AlartMessage from '../../../Hooks/AlartMessage';

const PaymentForm = ({ pay, setPay }) => {
    const { price, buyerPhone, buyerName } = pay
    const stripe = useStripe();
    const { successMessage } = AlartMessage()
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    console.log(pay);
    useEffect(() => {
        fetch("https://interverse.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) return;
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        phone: buyerPhone,
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError.message);
            return;
        }
        successMessage("PayMent Complite")
        const isAva = {
            type: 'sold'
        }
        fetch(`https://interverse.vercel.app/usephoneServices/publish/${pay.productID}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(isAva)
        })
            .then(rs => {
                const type = {
                    available: 'sold'
                }
                fetch(`https://interverse.vercel.app/user/payment/${pay._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(type)
                }).then(rs => {
                    setPay(null)
                })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
    }
    return (
        <div className=" p-7">
            <form onSubmit={handleSubmit} >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="pt-5">
                    <button className=' btn btn-primary btn-sm btn-outline' type="submit"
                        disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentForm;
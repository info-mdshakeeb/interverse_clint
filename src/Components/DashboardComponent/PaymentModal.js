import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './payment/PaymentForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const PaymentModal = ({ pay, isLoading, setPay }) => {
    console.log(pay);
    if (isLoading) return

    return (
        <div>
            <input type="checkbox" id="paymemt-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-96">
                    <label
                        htmlFor="paymemt-modal"

                        className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => setPay(null)}>✕</label>
                    <div className="payment card">
                        <Elements
                            stripe={stripePromise}
                        >
                            <PaymentForm
                                pay={pay}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
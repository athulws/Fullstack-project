import React from 'react';
import '../Styles/PaymentTypes.css';
import paypal from '../Assets/paypal.png';
import stripe from '../Assets/Stripe-Symbol.png';
import { Link } from 'react-router-dom';

const PaymentTypes = () => {
    return (
        <div className='paymentTypes'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                        <div className="payment_setting">
                        <h1 className="text-center pay-method">Select Payment Method</h1>
                        <div className='title-boarder'></div>
                            <div className='top-pay'>
                                <div className="payment_firstOption">
                                    <div className='first-option-img'><img src={paypal} alt="PayPal" className="paypal_img" /></div>
                                    <div className="payPal_content">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={'/user/number_repeat'}>Automatic Renew</Link>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Link to={'/user/order_redirect'}>Manual Renew</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment_secondOption">
                                    <div className='second-option-img'><img src={stripe} alt="Stripe" className="stripe_img" /></div>
                                    <div className="stripe_content">
                                        <div className="row">
                                            <div className="col">
                                                <Link to={'/user/number_repeat'}>Automatic Renew</Link>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <Link to={'/user/product_information'}>Manual Renew</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentTypes;


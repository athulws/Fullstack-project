import React from 'react'
import '../Styles/Footer.css'
import paypal from '../Assets/paypal.png'
import stripe from '../Assets/stripe.png'

const Footer = () => {
    return (
        <div>
            <div className='fluid-container footer-wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className='catagories'>
                                <h6>CATEGORIES</h6>
                                <p>First Link</p>
                                <p>Second Link</p>
                                <p>Third Link</p>
                                <p>Fourth Link</p>
                            </div>
                        </div>
    
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className='catagories'>
                                <h6>CATEGORIES</h6>
                                <p>First Link</p>
                                <p>Second Link</p>
                                <p>Third Link</p>
                                <p>Fourth Link</p>
                            </div>
                        </div>
    
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className='catagories'>
                                <h6>CATEGORIES</h6>
                                <p>First Link</p>
                                <p>Second Link</p>
                                <p>Third Link</p>
                                <p>Fourth Link</p>
                            </div>
                        </div>
    
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                            <div className='catagories'>
                                <h6>SUBSCRIBE</h6>
                                <div className='subscribe-setUp'>
                                    <input type="text" className="form-control" />
                                    <button className='footer_submit'>Submit</button>
                                </div>
                                <span>Bitters chicharrones fanny pack</span>
                                <div className="image-set">
                                    {/* Replace 'paypal' and 'stripe' with your actual image paths */}
                                    <img className='img-paypal' src={paypal} alt="PayPal" />
                                    <img className='img-stripe' src={stripe} alt="Stripe" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

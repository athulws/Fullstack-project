import { BsFillInboxFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Navbar from './Navbar'
import subscription from '../Assets/subscription.png'
import invoice from '../Assets/invoice.png'
import support from '../Assets/support.png'
import Footer from './Footer';
import Copyright from './Copyright';
import SubNav from './SubNav';
import { useLocation } from 'react-router-dom';


import React, { useState } from 'react';
import paypal from '../Assets/paypal.png';
import stripe from '../Assets/Stripe-Symbol.png'
import { Link } from 'react-router-dom';
import '../Styles/PaymentSet.css';

const PaymentSet = () => {
    const location = useLocation();
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleClick = () => {
        setIsToggled(!isToggled);
    }
    // ------------------------------------------------------------------
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            <Navbar />
            <SubNav />
            <div className="platform1">
                <div id="wrapper" className={isToggled ? 'toggled' : ''}>
                    {/* Sidebar */}
                    <div id="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <div id="button-content">
                                <button>SAAS</button>
                            </div>
                            {/* <div className='dashboard_set'>
                                <Link to={'/user/dashboard'}>
                                    <div className={`dashboard_titles_wrapper ${location.pathname === '/user/dashboard' ? 'active' : ''}`} id='dashboard'>
                                        <BsFillInboxFill />
                                        <h6>Dashboard</h6>
                                    </div>
                                </Link>
                            </div> */}
                            <div className='dashboard_titles'>
                                <Link to={'/user/dashboard'}>
                                    <div className={`dashboard_titles_wrapper ${location.pathname === '/user/dashboard' ? 'active' : ''}`} id=''>
                                        <BsFillInboxFill />
                                        <h6>Dashboard</h6>
                                    </div>
                                </Link>
                            </div>

                            <div className='dashboard_titles'>
                                <Link to={'/user/subscriptions'}>
                                    <div className={`dashboard_titles_wrapper ${location.pathname === '/user/subscriptions' ? 'active' : ''}`} id='one'>
                                        <FaRegStar />
                                        <h6>Subscriptions</h6>
                                    </div>
                                </Link>
                            </div>

                            <div className='dashboard_titles'>
                                <Link to={'/user/unpaidinvoices'}>
                                    <div className={`dashboard_titles_wrapper ${location.pathname === '/user/unpaidinvoices' ? 'active' : ''}`} id='two'>
                                        <FaRegClock />
                                        <h6>Unpaid Invoices</h6>
                                    </div>
                                </Link>
                            </div>

                            <div className='dashboard_titles'>
                                <Link to={'/user/invoices'}>
                                    <div className={`dashboard_titles_wrapper ${location.pathname === '/user/invoices' ? 'active' : ''}`} id='three'>
                                        <FaRegClock />
                                        <h6>Paid Invoices</h6>
                                    </div>
                                </Link>
                            </div>

                            <div className='dashboard_titles'>
                                <Link to={'/user/support'} id='four'>
                                    <div className={`dashboard_titles_wrapper ${location.pathname === '/user/support' ? 'active' : ''}`}>
                                        <IoPaperPlaneOutline />
                                        <h6>Support Tickets</h6>
                                    </div>
                                </Link>
                            </div>

                        </ul>
                    </div>

                    {/* ..............page-content................. */}

                    <div className='fluid-container payament-cover'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className='paymentBox'>
                                        <h2 className='title-option'>Select Your Payment Option</h2>
                                        <p className='choose-paragraph'>Click one of the options below</p>
                                        <button className={`accordion ${activeIndex === 0 ? "active-state" : ""}`} onClick={() => handleAccordionClick(0)}>
                                            <img className='paypalIcon' src={paypal} alt="" />
                                        </button>
                                        <div className={`panel ${activeIndex === 0 ? "show" : ""}`}>
                                            <p className='panel-text'>Click here:<Link className='renew' to={'/user/number_repeat'}>Automatic Renew</Link></p>
                                            <p className='panel-text'>Click here:<Link className='renew' to={'/user/order_redirect'}>Manual Renew</Link></p>
                                        </div>

                                        <button className={`accordion ${activeIndex === 1 ? "active-state" : ""}`} onClick={() => handleAccordionClick(1)}>
                                            <img className='paypalIcon' src={stripe} alt="" />
                                        </button>
                                        <div className={`panel ${activeIndex === 1 ? "show" : ""}`}>
                                            <p className='panel-text'>Click here:<Link className='renew' to={'/user/number_repeat'}>Automatic Renew</Link></p>
                                            <p className='panel-text'>Click here:<Link className='renew' to={'/user/product_information'}>Manual Renew</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ..............page-content................. */}
                </div>
            </div>
            <Footer />
            <Copyright />
        </div>
    );
}

export default PaymentSet;


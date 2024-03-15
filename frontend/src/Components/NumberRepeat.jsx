import React, { useState } from 'react';
import { BsFillInboxFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

import subscription from '../Assets/subscription.png'
import invoice from '../Assets/invoice.png'
import support from '../Assets/support.png'
import Footer from './Footer';
import Copyright from './Copyright';
import SubNav from './SubNav';
import { useLocation } from 'react-router-dom';


import '../Styles/NumberRepeat.css'

const NumberRepeat = () => {
    const location = useLocation();
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleClick = () => {
        setIsToggled(!isToggled);
    }
    // ------------------------------------------------------------------
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
                    {/* ......................pagecontent......................... */}

                    <div className='fluid-container dayCount'>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
                                    <div className="number-repeat">
                                        <h1 className="text-center">Select Number of Repetition</h1>
                                        <select className="form-select mb-3">
                                            <option value="2">2 days</option>
                                            <option value="3">3 days</option>
                                            <option value="4">4 days</option>
                                        </select>
                                        <div className="text-center">
                                            <button className="btn btn-success">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----------------------page content--------------------------- */}
                </div>
            </div>
            <Footer />
            <Copyright />
        </div>
    )
}

export default NumberRepeat

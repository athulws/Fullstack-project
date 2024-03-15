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
import '../Styles/Dashboard.css'


const Dashboard = () => {
    const location = useLocation();



    const [isToggled, setIsToggled] = useState(false);

    const handleToggleClick = () => {
        setIsToggled(!isToggled);
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
                    {/* /#sidebar-wrapper */}

                    {/* Page Content */}



                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="dashboard_wrapper">
                                    <div className="sub_heading">
                                        <h4>Space The Final Frontier</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="dashboard_wrapper">
                                    <div className="para">
                                        <p>Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 sets">
                                <div className='subscriptions-container'>
                                    <div className="subscriptions">
                                        <img src={subscription} alt="" />
                                        <div className='headline'><h6>Subscriptions</h6></div>
                                        <div className='paragraph_contents'><p>Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 sets">
                                <div className='invoice-container'>
                                    <div className="invoice">
                                        <img src={invoice} alt="" />
                                        <div className='headline'><h6>Invoice</h6></div>
                                        <div className='paragraph_contents'><p>Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 sets">
                                <div className='support-container'>
                                    <div className="support">
                                        <img src={support} alt="" />
                                        <div className='headline'><h6>Support</h6></div>
                                        <div className='paragraph_contents'><p>Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /#page-content-wrapper */}
                </div>
            </div>
            <Footer />
            <Copyright />
        </div>
    )
}

export default Dashboard

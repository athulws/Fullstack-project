import React, { useState } from 'react';
import { BsFillInboxFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import '../Styles/Subscription.css'
import subscription from '../Assets/subscription.png'
import invoice from '../Assets/invoice.png'
import support from '../Assets/support.png'
import Footer from './Footer';
import Copyright from './Copyright';
import SubNav from './SubNav';
import { MdSearch } from "react-icons/md";
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';


const Subscription = () => {
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
                                    <div id="dashboard-content">
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


                    <div className='subscript-wrappers'>
                        <div className='subscript-section'>
                            <div className="upgrade_now">
                                <button>Upgrade Now</button>
                            </div>
                            <div className="subscription_overview">
                                <h5>Subscriptions Overview</h5>
                                <p>Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                                <input type="text" className="form-control" placeholder='search for items' />
                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className='' scope="col" style={{ fontSize: '12px', textAlign: 'left' }}>PLAN NAME</th>
                                        <th className='' scope="col" style={{ fontSize: '12px', textAlign: 'left' }}>PAID AMOUNT</th>
                                        <th className='' scope="col" style={{ fontSize: '12px', textAlign: 'left' }}>PLAN INTERVAL</th>
                                        <th className='' scope="col" style={{ fontSize: '12px', textAlign: 'left' }}>PAYMENT STATUS</th>
                                        <th className='' scope="col" style={{ fontSize: '12px', textAlign: 'left' }}>PURCHASE DATE</th>
                                        <th className='' scope="col" style={{ fontSize: '12px', textAlign: 'left' }}>EXPIRY</th>
                                        <th className='' scope="col" style={{ fontSize: '12px', textAlign: 'left' }}>STATUS</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='' id='macBook' scope="row" style={{ fontSize: '14px', textAlign: 'left' }}>Apple MacBook Pro 17</td>
                                        <td className='' style={{ fontSize: '14px', textAlign: 'left' }}>Sliver</td>
                                        <td className='' style={{ fontSize: '14px', textAlign: 'left' }}>Laptop</td>
                                        <td className='' style={{ fontSize: '14px', textAlign: 'left' }}>$2999</td>
                                        <td className='' style={{ fontSize: '14px', textAlign: 'left' }}>$2999</td>
                                        <td className='' style={{ fontSize: '14px', textAlign: 'left' }}>$2999</td>
                                        <td className='' id='expired' style={{ fontSize: '14px', textAlign: 'left' }}>Plan Expired</td>
                                        <td className='' style={{ display: 'flex', gap: '6px', marginTop: '1px' }}>
                                            <button className='btn btn-primary subscription-btn-set'>Delete</button>
                                            <button className='btn btn-primary subscription-btn-set'>Upgrade/Downgrade</button>
                                            <button className='btn btn-primary subscription-btn-set'>Renew</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Pagination />
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

export default Subscription

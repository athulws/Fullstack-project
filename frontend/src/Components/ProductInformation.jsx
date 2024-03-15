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

import '../Styles/ProductInformation.css'

const ProductInformation = () => {
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
          <div className='info_wrapper'>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
                  <div className="product_info">
                    <div className="informations">
                      <p>Product Information</p>
                    </div>
                    <div className='form_wrapper'>
                      <div className="test-details">
                        <input type="text" className="form-control mb-2" value="One Day Test Plan" />
                        <input type="text" className="form-control mb-2" value="20" />
                        <input type="text" className="form-control mb-2" value="One Day" />
                        <input type="text" className="form-control mb-2" placeholder='Name' />
                        <input type="email" className="form-control mb-2" placeholder='email@you.com' />
                        <input type="number" className="form-control mb-2" placeholder='Card Number' />
                      </div>

                      <div className="row mb-2">
                        <div className="col">
                          <input type="text" className="form-control" placeholder='MMM' />
                        </div>
                        <div className="col">
                          <input type="text" className="form-control" placeholder='YYYY' />
                        </div>
                        <div className="col">
                          <input type="text" className="form-control" placeholder='CVC' />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <button className="btn btn-secondary btn-block">Reset</button>
                        </div>
                        <div className="col">
                          <button className="btn btn-success btn-block">Submit Payment</button>
                        </div>
                      </div>
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

export default ProductInformation

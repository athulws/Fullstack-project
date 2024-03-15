import React from 'react'
import { FaCheck } from "react-icons/fa6";
import '../Styles/Payment.css'
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div id='pricing'>
      <div className="payment_setup">
        <h3>Designed for business teams like yours</h3>
        <p>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth</p>
      </div>
      <div className="container">
        <div className="row">
          {/* Starter Plan */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="starter">
              <h3>Starter</h3>
              <div className='starter-para'><p className='start_set'>Best option for personal use & for your next project.</p></div>
              <p className='doller'>$29<span className='month'>/month</span></p>
              <div className='detailed-content-start'>
                <div className='details-start'>
                  <p><FaCheck /> Individual configuration</p>
                  <p><FaCheck /> No setup, or hidden fees</p>
                  <p><FaCheck /> Team size: <span>1 developer</span></p>
                  <p><FaCheck /> Premium support: <span>6 months</span></p>
                  <p><FaCheck /> Free updates: <span>6 months</span></p>
                </div>
              </div>
              <Link to={'/user/paymentSet'}><button className="start-btn">Get started</button></Link>
            </div>
          </div>

          {/* Company Plan */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="company">
              <h3>Company</h3>
              <p className='company-para'>Relevant for multiple users, extended & premium support.</p>
              <p className='doller'>$99<span className='month'>/month</span></p>
              <div className='detailed-content-company'>
                <div className='details-company'>
                  <p><FaCheck /> Individual configuration</p>
                  <p><FaCheck /> No setup, or hidden fees</p>
                  <p><FaCheck /> Team size: <span>10 developers</span></p>
                  <p><FaCheck /> Premium support: <span>24 months</span></p>
                  <p><FaCheck /> Free updates: <span>24 months</span></p>
                </div>
              </div>
              <Link to={'/user/paymentSet'}><button className="company-btn">Get started</button></Link>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="enterprise">
              <h3>Enterprise</h3>
              <p className='enterprise-para'>Best for large scale uses and extended redistribution rights.</p>
              <p className='doller'>$499<span className='month'>/month</span></p>
              <div className='detailed-content-enterprice'>
                <div className='details-enterprice'>
                  <p><FaCheck /> Individual configuration</p>
                  <p><FaCheck /> No setup, or hidden fees</p>
                  <p><FaCheck /> Team size: <span>100+ developers</span></p>
                  <p><FaCheck /> Premium support: <span>36 months</span></p>
                  <p><FaCheck /> Free updates: <span>36 months</span></p>
                </div>
              </div>
              <Link to={'/user/paymentSet'}><button className="enterprise-btn">Get started</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment

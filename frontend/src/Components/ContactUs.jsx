import React from 'react'
import '../Styles/ContactUs.css'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div id='contact'>
      <div className="contactus-heading">
        <h1>Contact US</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="google_map">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25006.380139839486!2d27.135636!3d38.423044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWlyLCBUw7xya2l5ZQ!5e0!3m2!1sen!2sus!4v1705489316297!5m2!1sen!2sus"
                width="95%"
                height="840"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="contactForm">
              <h1 className='feedback'>Feedback</h1>
              <p className='feedback_paragraph'>Post-ironic portland shabby chic echo park, banjo fashion axe</p>
              <form action="">
                <div className="mb-3 name_section">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>

                <div className="mb-3 email_section">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>

                <div className="mb-3 message_section">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <button type="submit" className="sumbit_button">
                  Submit
                </button>
              </form>
              {/* ................................................................................................................ */}

              <div className="container">
                <div className="row example_section">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    
                      <div className="address_demo">
                        <div className='address_title'><h6>ADDRESS</h6></div>
                        <div className='address_paragraph'><p>Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p></div>
                      </div>
                    
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    
                      <div className="others">
                        <div className='email_content'>
                          <h6>Email</h6>
                          <Link to="mailto:email@email.com">email@email.com</Link>
                        </div>
                        <div className="phone_content">
                          <h6>PHONE</h6>
                          <p>123-456-7890</p>
                        </div>
                      </div>
                    
                  </div>
                </div>
              </div>

              {/* ................................................................................................................ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

import React from 'react'
import '../Styles/Copyright.css'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../Assets/logo.svg'

const Copyright = () => {
    return (
        <div className='fluid-container copy_right'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="copyright_content">
                            <div className='saas-copyRight'>
                                <img src={logo} alt="Logo" />
                                <h4>SAAS</h4>
                            </div>
                            <div className='copyRight_link'>
                                <p>© 2022 SAAS — <Link to="">@SAAS</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="icon_wrapper">
                            <FaFacebookF className='facebook'/>
                            <FaTwitter className='twitter'/>
                            <FaInstagram className='instagram'/>
                            <FaLinkedinIn className='linkedin'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Copyright

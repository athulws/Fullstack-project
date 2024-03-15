import React, { useState } from 'react'

import { BiSearch } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import logo from '../Assets/logo.svg'

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showHowItWorksOptions, setShowHowItWorksOptions] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    };

    const toggleHowItWorksOptions = () => {
        setShowHowItWorksOptions(!showHowItWorksOptions);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="" />
                <h2>SAAS</h2>
            </div>
            <div className={`menu-icon ${showSidebar ? 'active' : ''}`} onClick={toggleSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className='navbar-options'>
                <div className='navbar_links_container'>
                    <Link to={'/'}><div>Home</div></Link>
                    <Link to={''}>
                        <div onClick={() => {
                            const features = document.getElementById("features");
                            if (features) {
                                features.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>Features</div>
                    </Link>

                    <Link to={''}>
                        <div onClick={() => {
                            const pricing = document.getElementById("pricing");
                            if (pricing) {
                                pricing.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>Pricing</div>
                    </Link>

                    <Link to={''}>
                        <div onClick={() => {
                            const contact = document.getElementById("contact");
                            if (contact) {
                                contact.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>Contact</div>
                    </Link>

                </div>
                <div className='navbar_btn_container'>
                    <Link to={'/login'}><button className='log_out'>Login</button></Link>
                    <Link to={'/register'}><button className='dash-board'>Get started</button></Link>
                </div>
            </ul>

            <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
                <div className="close-section">
                    <div className='close-btn'>
                        <button onClick={closeSidebar}><AiOutlineCloseCircle /></button>
                    </div>
                </div>

                <div className="options-section">
                    <Link to={'/'}><div>Home</div></Link>
                    <Link to={''}>
                        <div onClick={() => {
                            const features = document.getElementById("features");
                            if (features) {
                                features.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>Features</div>
                    </Link>

                    <Link to={''}>
                        <div onClick={() => {
                            const pricing = document.getElementById("pricing");
                            if (pricing) {
                                pricing.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>Pricing</div>
                    </Link>

                    <Link to={''}>
                        <div onClick={() => {
                            const contact = document.getElementById("contact");
                            if (contact) {
                                contact.scrollIntoView({ behavior: "smooth" });
                            }
                        }}>Contact</div>
                    </Link>
                    <Link to={'/login'}><button className='log_out'>Login</button></Link>
                    <Link to={'/register'}><button className='dash-board'>Get started</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar

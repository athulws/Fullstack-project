
import React, { useState } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { BsFillInboxFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import logo from '../Assets/logo.svg';
import { IoNotifications } from 'react-icons/io5';
import profilePicture from '../Assets/profilePicture.jpg';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


import '../Styles/SubNav.css';


const SubNav = () => {
    const [showLeftSidebar, setShowLeftSidebar] = useState(false);


    const toggleLeftSidebar = () => {
        setShowLeftSidebar(!showLeftSidebar);
    };

    const closeLeftSidebar = () => {
        setShowLeftSidebar(false);
    };




    return (
        <div className='subNav-contaniers'>
            <div className='left-menu-wrapper'>
                <span onClick={toggleLeftSidebar}><RiMenu2Fill /></span>
                <img src={logo} alt='' />
            </div>
            <div className='profile-container'>
                <span><IoNotifications /></span>
                <Tippy content="i am a tooltip" placement="bottom">
                    <img src={profilePicture} alt='' />
                </Tippy>
            </div>

            {/* Left Sidebar */}
            <div className={`left-sidebar ${showLeftSidebar ? 'active' : ''}`}>
                <div className='left-close-btn' onClick={closeLeftSidebar}>
                    <span id='close_icon'>&times;</span>
                </div>
                <div className='left-sidebar-content'>
                    {/* Your sidebar content goes here */}
                    <div id="button-content_add">
                        <button>SAAS</button>
                    </div>
                    <div className='dashboard_set_add'>
                        <div id="dashboard-content_add">
                            <BsFillInboxFill />
                            <h6>Dashboard</h6>
                        </div>
                    </div>
                    <div className='dashboard_titles_add'>
                        <div className="dashboard_titles_wrapper_add">
                            <FaRegStar />
                            <h6>Subscriptions</h6>
                        </div>
                    </div>
                    <div className='dashboard_titles_add'>
                        <div className="dashboard_titles_wrapper_add">
                            <FaRegClock />
                            <h6>Unpaid Invoices</h6>
                        </div>
                    </div>
                    <div className='dashboard_titles_add'>
                        <div className="dashboard_titles_wrapper_add">
                            <FaRegClock />
                            <h6>Paid Invoices</h6>
                        </div>
                    </div>
                    <div className='dashboard_titles'>
                        <div className="dashboard_titles_wrapper_add">
                            <IoPaperPlaneOutline />
                            <h6>Support Tickets</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubNav;


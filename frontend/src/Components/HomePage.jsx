import React from 'react'
import Navbar from './Navbar'
import '../Styles/HomePage.css'
import banner from '../Assets/banner.png'
import { FaArrowRight } from "react-icons/fa6";
import Features from './Features';
import Payment from './Payment';
import Questions from './Questions';
import Client from './Client';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Copyright from './Copyright';

const HomePage = () => {
    return (
        <div className='homePage'>
            <Navbar />
            <div className='container-fluid home'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 banner-contents">
                            <div className='start'><h1>Best way to start your</h1></div>
                            <div className='saas'><h1>SAAS project</h1></div>
                            <div className='banner-paragraph'><p>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p></div>
                            <div className="banner-btn">
                                <button id='get-started'>Get started <FaArrowRight /></button>
                                <button id="subscribe">Subscribe</button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 banner-img">
                            <img className="" src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Features/>
            <Payment/>
            <Questions/>
            <Client/>
            <ContactUs/>
            <Footer/>
            <Copyright/>
        </div>
    )
}

export default HomePage

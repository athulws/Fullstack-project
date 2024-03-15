import React from 'react'
import '../Styles/Client.css'
import { SiAirbnb } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import airbnb from '../Assets/airbnb.png'
import google from '../Assets/google.png'
import microsoft from '../Assets/microsoft.png'
import spotify from '../Assets/spotify-big-logo.png'
import mailchimp from '../Assets/mailchimp.png'


const Client = () => {
    return (
        <div className='client_container'>
            <div className="container container-cover">
                <h1 className="client-heading">Meet Our Clients</h1>

                <div className="row client-side">
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 airbnb_set">
                        <div className="client-setUp" id='airbnb'>
                            {/* <span className='client_icon'><SiAirbnb /></span> */}
                            <img className='icon_img' src={airbnb} alt="" />
                            <h2 className='clinet_names'>airbnb</h2>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 google_set">
                        <div className="client-setUp">
                        {/* <span className='client_icon'><FaGoogle /></span> */}
                        <img className='icon_img' src={google} alt="" />
                            <h2 className='clinet_names'>Google</h2>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 microsoft_set">
                        <div className="client-setUp">
                            {/* <span className='client_icon'><FaMicrosoft /></span> */}
                            <img className='icon_img' src={microsoft} alt="" />
                            <h2 className='clinet_names'>Microsoft</h2>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 spotify_set">
                        <div className="client-setUp" id='spotify'>
                            {/* <span className='client_icon'><FaSpotify /></span> */}
                            <img className='icon_img' src={spotify} alt="" />
                            <h2 className='clinet_names'>Spotify</h2>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 mailchimp_set">
                        <div className="client-setUp" id='mailChimp'>
                            {/* <span className='client_icon'><FaMailchimp /></span> */}
                            <img className='icon_img' src={mailchimp} alt="" />
                            <h2 className='clinet_names'>Mailchimp</h2>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 mashable_set">
                        <div className="mashable">
                            <h2 className='clinet_names'>Mashable</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client

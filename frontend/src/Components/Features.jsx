import React from 'react'
import '../Styles/Features.css'
import { GoArrowRight } from "react-icons/go";
import { RiPulseFill } from "react-icons/ri";
import { RiScissorsLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";

const Features = () => {
    return (
        <div id='features'>
            <div className="features-title">
                <h3>Explore our main features</h3>
                <p>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                <div className="green-line"></div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                        <div className='first-content'>
                            <div className='pulse_sec'>
                                <div className='pulse'>
                                    <span><RiPulseFill /></span>
                                </div>
                            </div>
                            <h2>Lorem ipsum</h2>
                            <p className='feature-content'>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            <div className='learn-more'><span>Learn More <GoArrowRight /></span></div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                        <div className='second-content'>
                            <div className='scissor-sec'>
                                <div className='scissors'>
                                    <span><RiScissorsLine /></span>
                                </div>
                            </div>
                            <h2>Lorem ipsum</h2>
                            <p className='feature-content'>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            <div className='learn-more'><span>Learn More <GoArrowRight /></span></div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                        <div className='third-content'>
                            <div className='user-sec'>
                                <div className='user'>
                                    <span><LuUser /></span>
                                </div>
                            </div>
                            <h2>Lorem ipsum</h2>
                            <p className='feature-content'>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            <div className='learn-more'><span>Learn More <GoArrowRight /></span></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features

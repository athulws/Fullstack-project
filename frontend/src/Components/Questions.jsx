import React from 'react'
import '../Styles/Questions.css'
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Questions = () => {
    return (
        <div className='questions-wrapper'>
            <div className='container'>
                <div className="questions-title">
                    <h1>Frequently asked questions</h1>
                    <hr className='title_line'/>
                </div>
            </div>

            <div className="container">
                <div className="row questions-section-one">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="figma_asset">
                            <div className='separate'>
                                <span className='question-icon'><FaQuestionCircle /></span>
                                <h3 cl>What do you mean by Figma assets?</h3>
                            </div>
                            <p className='answer'>You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="lifetime_access">
                            <div className='separate'>
                                <span className='question-icon'><FaQuestionCircle /></span>
                                <h3>What does free updates include?</h3>
                            </div>
                            <p className='answer'>The free updates that will be provided is based on the <Link className='green-map'>roadmap</Link> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="support_work">
                            <div className='separate'>
                                <span className='question-icon'><FaQuestionCircle /></span>
                                <h3>What does lifetime access exactly mean?</h3>
                            </div>
                            <p className='answer'>Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="more_project">
                            <div className='separate'>
                                <span className='question-icon'><FaQuestionCircle /></span>
                                <h3>What does the free version include?</h3>
                            </div>
                            <p className='answer'>The <Link className='green-map'>free version</Link> of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it.You can use this version for any purposes, because it is open-source under the MIT license.</p>
                        </div>
                    </div>
                </div>

                <div className="row questions-section-two">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="free_updates">
                            <div className='separate'>
                                <span className='question-icon'><FaQuestionCircle /></span>
                                <h3>How does support work?</h3>
                            </div>
                            <p className='answer'>We are aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.Feel free to <Link className='green-map'>contact us</Link> and we will help you out as soon as we can.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="free_version">
                            <div className='separate'>
                                <span className='question-icon'><FaQuestionCircle /></span>
                                <h3>What is the difference between Windster and Tailwind UI?</h3>
                            </div>
                            <p className='answer'>Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes.Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="difference">
                            <div className='separate'>
                                <span className='question-icon'><FaQuestionCircle /></span>
                                <h3>I want to build more than one project. Is that allowed?</h3>
                            </div>
                            <p className='answer'>You can use Windster for an unlimited amount of projects, whether its a personal website, a SaaS app, or a website for a client. As long as you dont build a product that will directly compete with Windster either as a UI kit, theme, or template, its fine.Find out more information by .</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="open_source">
                            <div className='separate'>
                                <span className='question-icon'><FaQuestionCircle /></span>
                                <h3>Can I use Windster in open-source projects?</h3>
                            </div>
                            <p className='answer'>Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself. With that being said, feel free to use this design kit for your open-source projects. Find out more information by .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions

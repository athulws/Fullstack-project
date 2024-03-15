import React from 'react'

const CreateTicket = () => {
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
                            <div className='dashboard_set'>
                                <div id="dashboard-content">
                                    <BsFillInboxFill />
                                    <h6>Dashboard</h6>
                                </div>
                            </div>
                            <div className='dashboard_titles'>
                                <div className="dashboard_titles_wrapper">
                                    <FaRegStar />
                                    <h6>Subscriptions</h6>
                                </div>
                            </div>
                            <div className='dashboard_titles'>
                                <div className="dashboard_titles_wrapper">
                                    <FaRegClock />
                                    <h6>Unpaid Invoices</h6>
                                </div>
                            </div>
                            <div className='dashboard_titles'>
                                <div className="dashboard_titles_wrapper">
                                    <FaRegClock />
                                    <h6>Paid Invoices</h6>
                                </div>
                            </div>
                            <div className='dashboard_titles'>
                                <div className="dashboard_titles_wrapper">
                                    <IoPaperPlaneOutline />
                                    <h6>Support Tickets</h6>
                                </div>
                            </div>
                        </ul>
                    </div>
                    {/* /#sidebar-wrapper */}

                    {/* Page Content */}

                        <div className="contactSection-wrapper">
                            <h1>Contact Us</h1>
                            <p>Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                            <form action="">
                                <div>
                                    <label htmlFor="">Your email</label>
                                    <input type="text" placeholder='name@flowbite.com'/>
                                </div>
                                <div>
                                    <label htmlFor="">Subject</label>
                                    <input type="text" placeholder='Let'/>
                                </div>
                            </form>
                        </div>

                    {/* /#page-content-wrapper */}
                </div>
            </div>
            <Footer />
            <Copyright />
        </div>
    )
}

export default CreateTicket

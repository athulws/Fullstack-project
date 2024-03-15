import React from 'react'
import logo from '../Assets/logo.svg'
import Navbar from './Navbar'
import Footer from './Footer'
import Copyright from './Copyright'
import '../Styles/Register.css'

const Register = () => {
    return (
        <div>
            <Navbar />
            <div className='register-container'>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 text-center">
                            <div className="register-title">
                                <img src={logo} alt="Logo" className="img-fluid" />
                                <h1>SAAS</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
                            <div className="register-wrapper">
                                <h4 className='register_form'>Create a new account</h4>
                                <form action="">

                                    <div className="mb-3">
                                        <label htmlFor="name" className="nameSet-label">Your name</label>
                                        <input type="text" className="form-control" id="name" placeholder="john" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="emailSet-label">Your email</label>
                                        <input type="email" className="form-control" id="email" placeholder="name@company.com" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="passwordSet-label">Password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>

                                    <div className="confirm">
                                        <span>Already have account?</span>
                                    </div>

                                    <button type="submit" className="register-button">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Copyright />
        </div>
    )
}

export default Register

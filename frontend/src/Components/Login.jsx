import React from 'react'
import logo from '../Assets/logo.svg'
import Navbar from './Navbar'
import '../Styles/Login.css'
import Footer from './Footer'
import Copyright from './Copyright'

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className='login-container'>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 text-center">
                            <div className="login-title">
                                <img src={logo} alt="Logo" className="img-fluid" />
                                <h1>SAAS</h1>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
                            <div className="login-wrapper">
                                <h4 className='signIn_form'>Sign in to your account</h4>
                                <form action="">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="email-label">Your email</label>
                                        <input type="email" className="form-control" id="email" placeholder="name@company.com" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="password-label">Password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>

                                    <div className="form-mark">
                                        <div className="remember">
                                            <input type="checkbox" name="" id="checkbox" />
                                            <label htmlFor="checkbox">Remember me</label>
                                        </div>
                                        <div className="forget-password">
                                            <span>Forget password?</span>
                                        </div>
                                    </div>

                                    <button type="submit" className="signIn-button">Sign In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Copyright/>
        </div>
    )
}

export default Login

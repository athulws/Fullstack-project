// import React, { useState } from 'react';
// import logo from '../Assets/logo.svg'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import Copyright from './Copyright'
// import '../Styles/Register.css'
// import axios from 'axios';

// const Register = () => {





//     return (
//         <div>
//             <Navbar />
//             <div className='register-container'>

//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 text-center">
//                             <div className="register-title">
//                                 <img src={logo} alt="Logo" className="img-fluid" />
//                                 <h1>SAAS</h1>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12">
//                             <div className="register-wrapper">
//                                 <h4 className='register_form'>Create a new account</h4>
//                                 <form action={''}>

//                                     <div className="mb-3">
//                                         <label htmlFor="name" className="nameSet-label">Your name</label>
//                                         <input type="text" name="name" className="form-control" id="name" placeholder="john" />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label htmlFor="email" className="emailSet-label">Your email</label>
//                                         <input type="email" name="email" className="form-control" id="email" placeholder="name@company.com" />
//                                     </div>

//                                     <div className="mb-3">
//                                         <label htmlFor="password" className="passwordSet-label">Password</label>
//                                         <input type="password" name="password" className="form-control" id="password" />
//                                     </div>

//                                     <div className="confirm">
//                                         <span>Already have account?</span>
//                                     </div>

//                                     <button type="submit" className="register-button">Register</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//             <Copyright />
//         </div>
//     )
// }

// export default Register


import React, { useState } from 'react';
import logo from '../Assets/logo.svg';
import Navbar from './Navbar';
import Footer from './Footer';
import Copyright from './Copyright';
import '../Styles/Register.css';
import axios from 'axios';

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()
        const body = { // ivide "body" kk pakaram enth venamenkilm kodukkam
            name,
            email,
            password
        }
        // console.log(body);

        try {
            const response = await axios.post('http://localhost:8008/register', body);
            console.log(response.data);
            alert('Registration successful');
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed');
        }
    }
    

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
                                <form onSubmit={''}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="nameSet-label">Your name</label>
                                        <input type="text" name="name" className="form-control" id="name" placeholder="John" onChange={(e) => setName(e.target.value)} required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="emailSet-label">Your email</label>
                                        <input type="email" name="email" className="form-control" id="email" placeholder="name@company.com" onChange={(e) => setEmail(e.target.value)} required />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="passwordSet-label">Password</label>
                                        <input type="password" name="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} required />
                                    </div>

                                    <div className="confirm">
                                        <span>Already have an account?</span>
                                    </div>

                                    <button type="submit" className="register-button" onClick={(e) => handleRegister(e)}>Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Copyright />
        </div>
    );
};

export default Register;


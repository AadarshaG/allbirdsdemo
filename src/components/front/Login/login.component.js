import React from 'react'

import './login.component.css'

function Login(){
    
    return(
        <>
            <section id="login-page">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 login-details">
                            <div id="login-title">LOGIN</div>
                            <form>
                                <div className="login-email">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email"></input>
                                </div>
                                <div className="login-password">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password"></input>
                                </div>
                                <div className="login-button">
                                    <button type="submit"><h5>Sign In</h5></button>
                                </div>
                            </form>
                            <div id="forgot-password">Forgot Password</div>
                        </div>
                        <div className="col-sm-6 register-details">
                        <div id="register-title">CREATE AN ACCOUNT</div>
                        <div id="register-description">
                            <p>We never save credit card information.</p>
                            <p>Registering makes checkout fast and easy and saves your order information in your account.</p>
                        </div>
                            <form>
                                <div className="register-fname">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" name="fname" id="fname"></input>
                                </div>
                                <div className="register-lname">
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" name="lname" id="lname"></input>
                                </div>
                                <div className="register-email">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email"></input>
                                </div>
                                <div className="register-password">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password"></input>
                                </div>
                                <div className="register-confirm-password">
                                    <label htmlFor="password_confirmation">Confirm Password</label>
                                    <input type="password" name="password_confirmation" id="password_confirmation"></input>
                                </div>
                                <div className="register-button">
                                    <button type="submit"><h5>REGISTER</h5></button>
                                </div>
                            </form>
                            <div id="register-paragraph">
                                <p> By creating an account, you agree to our Terms of Use and Privacy Policy.</p>
                            </div>
                            <div id="required-fields">
                                <p>- REQUIRED FIELDS *</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
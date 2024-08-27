import React from 'react'
import "./signIn.css"
import { Link } from 'react-router-dom'
import {FaGoogle, FaFacebook} from "react-icons/fa"
import SignInImage from "/background-image/book_shelf.jpg"

const SignIn = () => {
    return (
        <div className='signin-container'>
            {/* <div className="login-nav section-spacing">
                <div className="logo">
                    <p><span>V</span>Book</p>
                </div>
                <p>Login</p>
            </div> */}
            <div className="image-container">
                <div className="image-content">
                    <img src={SignInImage} alt="Sign In Lodge Pic" />
                </div>
                <h1>Find your desired book</h1>
                <p>Purchase in just a few clicks</p>
            </div>
            <div className="login-container">
                <div className="login-content">
                    <h1>Welcome Back to VBook!</h1>
                    <p>Sign in to your account.</p>
                    <form action="" className="login">
                        <div className="input-container">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" placeholder='Enter Email'/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="password" >Password</label>
                            <input type="password" id="password" placeholder='Enter Password'/>
                        </div>
                        <div className="notification">
                            <label className='notif'><input type="checkbox" /> <span>Remember Me</span></label>
                            <Link to={"/forgotpassword"}><p>Forgot Password?</p></Link>
                        </div>
                        <div className="action">
                            <button>Login</button>
                        </div>
                    </form>
                    <div className="info">
                        <span></span> <p>Instant Login</p> <span></span>
                    </div>
                    <div className="social-logins">
                        <button><div className="icon-con"><FaGoogle className='icon'/></div><span>Continue with Google</span></button>
                        <button><div className="icon-con"><FaFacebook className='icon'/></div><span>Continue with Facebook</span></button>
                    </div>
                    <div className="redirection">
                        <p>Don't have an account? <Link to={"/signup"}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
import React from 'react'
import "./signUp.css"
import {FaGoogle, FaFacebook} from "react-icons/fa"
import SignUpImage from "/background-image/book_shelf.jpg"
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='signup-container'>
            {/* <div className="login-nav section-spacing">
                <div className="logo">
                    <p><span>V</span>Book</p>
                </div>
                <p>Register</p>
            </div> */}
            <div className="image-container">
                <div className="image-content">
                    <img src={SignUpImage} alt="Sign In Lodge Pic" />
                </div>
                <h1>Find your desired book</h1>
                <p>Purchase in just a few clicks</p>
            </div>
            <div className="login-container">
                <div className="login-content">
                    <h1>Create your Free Account</h1>
                    <p>Submit your data to register</p>
                    <form action="" className="login">
                        <div className="input-container">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder='Enter Full Name'/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="location">Your Location</label>
                            <input type="text" id="location" placeholder='Enter Location'/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" placeholder='Enter Email'/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="password" >Password</label>
                            <input type="password" id="password" placeholder='Enter Password'/>
                        </div>
                        <div className="notification">
                            <label className='notif'><input type="checkbox" /> <span>I agree to NxLodge <a href="">Security</a> and <a href="">Privacy Policy</a></span></label>
                        </div>
                        <div className="action">
                            <button>Get Started</button>
                        </div>
                    </form>
                    <div className="info">
                        <span></span> <p>Instant SignUp</p> <span></span>
                    </div>
                    <div className="social-logins">
                        <button><div className="icon-con"><FaGoogle className='icon'/></div><span>Continue with Google</span></button>
                        <button><div className="icon-con"><FaFacebook className='icon'/></div><span>Continue with Facebook</span></button>
                    </div>
                    <div className="redirection">
                        <p>I have an account? <Link to={"/signin"}>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
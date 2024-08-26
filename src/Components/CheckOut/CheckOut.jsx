import React, { useContext } from 'react'
import "./checkOut.css"
import { VBookContext } from '../../VBookContext/VBookContext'
import { Link } from 'react-router-dom'
// import {FaCcMastercard, FaLock} from "react-icons/fa"
import Payment from './Payment/Payment'

const CheckOut = () => {

    const {getTotalCost} = useContext(VBookContext)

    const standard_cost = 20.32

    return (
        <div className='check-out'>
            <form action="">
                <div className="first-section">
                    <div className="contact-login">
                        <h1>Contact</h1>
                        <Link className='login'>Log In</Link>
                    </div>
                    <div className="contact">
                        <input type="text" placeholder='Email or mobile phone number' />
                    </div>
                    <div className="news-notif">
                        <label htmlFor="">
                            <input type="checkbox" className='checkbox' />
                            Email me with news and offers
                        </label>
                    </div>
                </div>
                <div className="second-section">
                    <h1>Delivery</h1>
                    <input type="text" placeholder='Country/Region' />
                    <div className="name-details">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <input type="text" placeholder='Address' />
                    <input type="text" placeholder='Apartment, suite, etc. ' />
                    <div className="city-details">
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                        <input type="text" placeholder='Postal Code'/>
                    </div>
                    <div className="news-notif">
                        <label htmlFor="">
                            <input type="checkbox" className='checkbox' />
                            Save this information for next time
                        </label>
                    </div>
                </div>
                <div className="third-section">
                    <h1>Shipping method</h1>
                    <div className="standard-cost">
                        <p>Standard</p>
                        <p className='cost'>${standard_cost}</p>
                    </div>
                </div>
                <div className="fourth-section">
                    <h1>Summary</h1>
                    <div className="cost-summary-content">
                        <div className="subtotal">
                            <p>Subtotal</p>
                            <p>${(getTotalCost()).toFixed(2)}</p>
                        </div>
                        <div className="shipping">
                            <p>Shipping</p>
                            <p>${standard_cost}</p>
                        </div>
                        <div className="total-cost">
                            <p>Total</p>
                            <p>USD ${(getTotalCost()).toFixed(2) + standard_cost.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <div className="fifth-section">
                    <h1>Payment</h1>
                    {/* <p>All transactions are secure and encrypted.</p>
                    <div className="card-details">
                        <div className="card-header">
                            <p>Credit card</p>
                            <FaCcMastercard />
                        </div>
                        <div className="card-content">
                            <div className="card-number">
                                <input type="number" />
                                <FaLock />
                            </div>
                            <div className="date-code">
                                <input type="" />
                            </div>
                        </div>
                    </div> */}
                    {/* <Payment /> */}
                </div>
            </form>
        </div>
    )
}

export default CheckOut

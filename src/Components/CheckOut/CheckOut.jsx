import React, { useContext, useState } from 'react'
import "./checkOut.css"
import { VBookContext } from '../../VBookContext/VBookContext'
import { Link } from 'react-router-dom'
import MainHero from '../../Containers/MainHero/MainHero'

const CheckOut = () => {

    const {getTotalCost} = useContext(VBookContext)

    const standard_cost = 20.32

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [error, setError] = useState('');

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setCardNumber(value);
    };

    const handleExpiryDateChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setExpiryDate(value);
    };

    const handleCvcChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setCvc(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cardNumber.length !== 16 || expiryDate.length !== 4 || cvc.length !== 3) {
            setError('Please fill out all fields correctly.');
        } else {
            setError('');
            console.log('Card Number:', cardNumber);
            console.log('Expiry Date:', expiryDate);
            console.log('CVC:', cvc);
            alert("Payment Successful!")
        }
    };

    return (
        <>
        <MainHero section_title={"Shopping Cart"} main_header={"CheckOut"} />
        <div className='check-out'>
            <form action="" onClick={handleSubmit}>
                <div className="first-section">
                    <div className="contact-login">
                        <h1>Contact</h1>
                        <Link to={"/signin"} className='login'>Log In</Link>
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
                    <div>
                        <label>Card Number</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            maxLength="16"
                            placeholder="1234 5678 9012 3456"
                        />
                    </div>
                    <div>
                        <label>Expiry Date (MMYY)</label>
                        <input
                            type="text"
                            value={expiryDate}
                            onChange={handleExpiryDateChange}
                            maxLength="4"
                            placeholder="MMYY"
                        />
                    </div>
                    <div>
                        <label>CVC</label>
                        <input
                            type="text"
                            value={cvc}
                            onChange={handleCvcChange}
                            maxLength="3"
                            placeholder="CVC"
                        />
                    </div>
                </div>
                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                <button type="submit">
                    Simulate Payment
                </button>
            </form>
        </div>
        </>
    )
}

export default CheckOut

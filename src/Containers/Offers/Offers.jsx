import React from 'react'
import {FaPaperPlane, FaLock, FaTag} from "react-icons/fa"
import "./offers.css"

const Offers = () => {
  return (
    <div className='offers-container'>
        <div className="offers-content">
            <div className="offer">
                <div className="icon-con">
                    <FaPaperPlane className='icon'/>
                </div>
                <div className="details">
                    <h1>Free Shipping</h1>
                    <p>Order over $100</p>
                </div>
            </div>
            <div className="offer">
                <div className="icon-con">
                    <FaLock className='icon' />
                </div>
                <div className="details">
                    <h1>Secure Payment</h1>
                    <p>100% Secure Payment</p>
                </div>
            </div>
            <div className="offer">
                <div className="icon-con">
                    <FaTag className='icon' />
                </div>
                <div className="details">
                    <h1>Best Price</h1>
                    <p>Guaranteed Price</p>
                </div>
            </div>
        </div>
        
        
        
    </div>
  )
}

export default Offers
import React from 'react'
import "./footer.css"
import {FaTwitter, FaFacebook, FaPinterest, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer-container section-spacing'>
        <div className="footer-content">
          <div className="footer-info">
              <div className="logo">
                  <h1><span>V</span>Book</h1>
              </div>
              <div className="location">
                  <p>343 Locale Port</p>
                  <p>Drive FL 33458 USA</p>
                  <p>+0000 123 456 789</p>
                  <p>info@example.com</p>
              </div>
          </div>
          <div className="other-links">
            <h1>Help</h1>
            <ul className='list-items'>
              <li>Search</li>
              <li>Help</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Shipping Information</li>
            </ul>
          </div>
          <div className="other-links">
            <h1>Support</h1>
            <ul className='list-items'>
              <li>Search Terms</li>
              <li>Advanced Search</li>
              <li>Helps and Faqs</li>
              <li>Store Location</li>
              <li>Orders and Returns</li>
            </ul>
          </div>
          <div className="other-links">
            <h1>Information</h1>
            <ul className='list-items'>
              <li>Contact</li>
              <li>About</li>
              <li>Careers</li>
              <li>Refund and Returns</li>
              <li>Deliveries</li>
            </ul>
          </div>
        </div>
        <div className="footer-icons">
          <div className="icon-con">
            <FaTwitter className='icon' />
          </div>
          <div className="icon-con">
            <FaFacebook className='icon' />
          </div>
          <div className="icon-con">
            <FaPinterest className='icon' />
          </div>
          <div className="icon-con">
            <FaInstagram className='icon' />
          </div>
        </div>
    </div>
  )
}

export default Footer
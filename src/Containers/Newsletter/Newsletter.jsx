import React from 'react'
import "./newsletter.css"

const Newsletter = () => {
  return (
    <div className='newsletter-container section-spacing'>
        <div className="newsletter-content">
            <h1>Subscribe to our Newsletter</h1>
            <p>Enter your email address to receive regular updates, as well as news on upcoming events and specific offers.</p>
            <form action="" className="form-container">
                <input type="email" placeholder='Email Address' />
                <button>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter
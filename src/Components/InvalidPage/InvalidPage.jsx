import React from 'react'
import { Link } from 'react-router-dom'
import "./invalidPage.css"

const InvalidPage = () => {
  return (
    <div className='invalid-page-container'>
        <h1>Page Not Found - 404</h1>
        <p>Either this page has been removed or doesn't exist</p>
        <Link to={"/home"}>Return to Home Page</Link>
    </div>
  )
}

export default InvalidPage

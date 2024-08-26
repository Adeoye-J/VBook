import React from 'react'
import "./mainHero.css"
import { Link } from 'react-router-dom'

const MainHero = ({section_title, main_header = "Categories"}) => {
  return (
    <div className='mainhero-container'>
        <div className="mainhero-content">
            <h1>{main_header}</h1>
            <div className="path">
                <p><Link to={"/home"} className='reference'>Home</Link>/ {section_title}</p>
            </div>
        </div>
    </div>
  )
}

export default MainHero
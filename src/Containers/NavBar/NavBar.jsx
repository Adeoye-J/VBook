import React, { useContext, useState } from 'react'
import "./navBar.css"
import { Link } from 'react-router-dom'
import {FaHeart, FaShoppingCart} from "react-icons/fa"
import {RiMenu3Line, RiCloseFill} from "react-icons/ri"
import { VBookContext } from '../../VBookContext/VBookContext'


const [showMobileMenu, setShowMobileMenu] = useState(false)

const Menu = () => {

    const [menu, setMenu] = useState("Home")
    const [showSublist, setShowSublist] = useState(false)

    const handleCategories = () => {
        setMenu("Categories")
        setShowSublist(!showSublist)
    }
    
    return(
        <>
            <li onClick={() => {setMenu("Home"); setShowSublist(false)}} ><Link onClick={() => setShowMobileMenu(false)} className={`list-item ${menu === "Home" && "underline"}`} to={"/home"}>Home</Link></li>
            <li onClick={() => {setMenu("Books"); setShowSublist(false)}} ><Link onClick={() => setShowMobileMenu(false)} className={`list-item ${menu === "Books" && "underline"}`} to={"/books"}>Books</Link></li>

            <li 
                onClick={handleCategories}
            >
                <Link className={`list-item ${menu === "Categories" && "underline"}`} >Categories</Link>
                {showSublist && (
                    <ul className='sublist'>
                        <li><Link onClick={() => setShowMobileMenu(false)} className='list-item' to={"/categories/fiction"}>Fiction</Link></li>
                        <li><Link onClick={() => setShowMobileMenu(false)} className='list-item' to={"/categories/non-fiction"}>Non-Fiction</Link></li>
                    </ul>
                )}
            </li>
            <li onClick={() => {setMenu("Trending"); setShowSublist(false)}} ><Link onClick={() => setShowMobileMenu(false)} className={`list-item ${menu === "Trending" && "underline"}`} to={"/pages/trending"}>Trending</Link></li>
            <li onClick={() => {setMenu("Deals"); setShowSublist(false)}} ><Link onClick={() => setShowMobileMenu(false)} className={`list-item ${menu === "Deals" && "underline"}`} to={"/pages/deals"}>Deals</Link></li>
        </>
    )
}

const NavBar = () => {
    
    // const {} = useContext(VBookContext)
    // const [showMobileMenu, setShowMobileMenu] = useState(false)

    
    return (
        <div className='navbar-container section-spacing'>
            <div className="logo-container">
                <div className="logo">
                    <h1><span>V</span>Book</h1>
                </div>
            </div>
            <div className={`${showMobileMenu ? "mobile-menu" : "main-menu"}`}>
                <ul className="list-items">
                    <Menu />
                    <div className="cross-bar">
                        <Link className='icon-link' onClick={() => setShowMobileMenu(false)}><RiCloseFill className='icon' /></Link>
                    </div>
                </ul>
            </div>
            <div className="icons">
                <Link className='icon-link' to={"/wishlist"}><FaHeart className='icon' /> <div className="item-no"></div></Link>
                <Link className='icon-link' to={"/cart"}><FaShoppingCart className='icon' /> <div className="item-no"></div></Link>
                <button>Login</button>
                <div className="menu-bar">
                    <Link className='icon-link' onClick={() => setShowMobileMenu(true)} ><RiMenu3Line className='icon' /></Link>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar

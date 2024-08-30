import React, { useContext, useState } from 'react'
import "./navBar.css"
import { Link } from 'react-router-dom'
import {FaHeart, FaShoppingCart} from "react-icons/fa"
import {RiMenu3Line, RiCloseFill} from "react-icons/ri"
import { VBookContext } from '../../VBookContext/VBookContext'

const Menu = ({setShowMobileMenu}) => {

    const [menu, setMenu] = useState("Home")
    const [showSublist, setShowSublist] = useState(false)

    const handleCategories = () => {
        setMenu("Categories")
        setShowSublist(!showSublist)
    }

    const handleClick = (menuName) => {
        setMenu(menuName)
        setShowSublist(false)
        setShowMobileMenu(false)
    }
    
    return(
        <>
            <li onClick={() => handleClick("Home")} ><Link className={`list-item ${menu === "Home" && "underline"}`} to={"/home"}>Home</Link></li>
            <li onClick={() => handleClick("Books")} ><Link className={`list-item ${menu === "Books" && "underline"}`} to={"/books"}>Books</Link></li>

            <li 
                onClick={handleCategories}
            >
                <Link className={`list-item ${menu === "Categories" && "underline"}`} >Categories</Link>
                {showSublist && (
                    <ul className='sublist'>
                        <li onClick={() => handleClick("Fiction")}><Link className='list-item' to={"/categories/fiction"}>Fiction</Link></li>
                        <li onClick={() => handleClick("Non-Fiction")}><Link className='list-item' to={"/categories/non-fiction"}>Non-Fiction</Link></li>
                    </ul>
                )}
            </li>
            <li onClick={() => handleClick("Trending")} ><Link className={`list-item ${menu === "Trending" && "underline"}`} to={"/pages/trending"}>Trending</Link></li>
            <li onClick={() => handleClick("Deals")} ><Link className={`list-item ${menu === "Deals" && "underline"}`} to={"/pages/deals"}>Deals</Link></li>
        </>
    )
}

const NavBar = () => {
    
    const {cartData, wishlist} = useContext(VBookContext)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    
    return (
        <div className='navbar-container section-spacing'>
            <div className="logo-container">
                <div className="logo">
                    <h1><span>V</span>Book</h1>
                </div>
            </div>
            <div className={`${showMobileMenu ? "mobile-menu" : "main-menu"}`}>
                <ul className="list-items">
                    <Menu setShowMobileMenu={setShowMobileMenu} />
                    <div className="cross-bar">
                        <Link className='icon-link' onClick={() => setShowMobileMenu(false)}><RiCloseFill className='icon' /></Link>
                    </div>
                </ul>
            </div>
            <div className="icons">
                <Link className='icon-con' to={"/pages/wishlist"}>
                    <FaHeart className='icon' /> 
                    {wishlist.length > 0 && <div className="item-no">{wishlist.length}</div>}
                </Link>
                <Link className='icon-con' to={"/cart"}>
                    <FaShoppingCart className='icon' /> 
                    {cartData.length > 0 && <div className="item-no">{cartData.length}</div>}
                </Link>
                <Link to={"/signin"}><button>Login</button></Link>
                <div className="menu-bar">
                    <Link className='icon-link' onClick={() => setShowMobileMenu(true)} ><RiMenu3Line className='icon' /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar

import React, { useContext, useState } from 'react'
import "./bookDetails.css"
import { VBookContext } from '../../VBookContext/VBookContext'
import { Link } from 'react-router-dom'
import all_data from "../../all_books.json"
import MainHero from '../../Containers/MainHero/MainHero'
import Newsletter from '../../Containers/Newsletter/Newsletter'
import SideCart from '../Carts/SideCart/SideCart'

const BookDetails = () => {

    const {selectedItem, handleAddToCart, handleRemoveFromCart, showMiniCart, setShowMiniCart, cartData, wishlist, handleAddToWishlist, handleRemoveFromWishlist} = useContext(VBookContext)

    const item = all_data.find((data) => data.title === selectedItem)

    const [number, setNumber] = useState(1)

    const handleSubtraction = () => {
        if (number > 1) {
            setNumber(prevNumber => prevNumber - 1)
        } else {
            alert("Quantity cannot be less than 1")
        }
    }

    const handleAddition = () => {
        setNumber(prevNumber => prevNumber + 1)
    }

    const sum_total = number * item.cost

    const handleCartAction = () => {
        const itemIndex = cartData.findIndex((cartItem) => cartItem.title === selectedItem)

        if (itemIndex !== -1) {
            // If the item is in the cart, remove it using its index
            handleRemoveFromCart(itemIndex)
        } else {
            handleAddToCart()
        }
    }

    const handleWishlistAction = () => {
        const itemIndex = wishlist.findIndex((wish) => wish.title === selectedItem)

        if (itemIndex !== -1) {
            // If the item is in the cart, remove it using its index
            handleRemoveFromWishlist(itemIndex)
        } else {
            handleAddToWishlist()
        }
    }

    const handleBuyNow = () => {
        const item = cartData.find((book) => book.title === selectedItem)

        if (!item) {
            handleAddToCart()
        }

        return;
    }

  return (
    <div className='bookdetails-container'>
        <MainHero section_title={selectedItem} />
        {
            showMiniCart && 
            (<div className="minicart">
                <SideCart />
            </div>)
        }
        <div className="overview-container">
            <div className="overview-content">
                <div className="book-cover">
                    <img src={item.cover_image} alt="Cover Image" />
                </div>
                <div className="book-details">
                    <div className="basic-details">
                        <h1>{item.title}</h1>
                        <p><span>About Author:</span> {item.about_author}</p>
                        <span>${item.cost}</span>
                    </div>
                    <div className="other-details">
                        <table>
                            <tr>
                                <td>Vendor</td>
                                <td>{item.vendor}</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>{item.type}</td>
                            </tr>
                            <tr>
                                <td>Format</td>
                                <td>{item.format}</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>{item.language}</td>
                            </tr>
                            <tr>
                                <td>Publication Date</td>
                                <td>{item.publication_date}</td>
                            </tr>
                            <tr>
                                <td>Quantity</td>
                                <td>
                                    <div className="counter-container">
                                        <div className="counter">
                                            <div className="border subtract" onClick={handleSubtraction}>-</div>
                                            <div className="border number">{number}</div>
                                            <div className="border add" onClick={handleAddition}>+</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Availability</td>
                                <td>{item.availability}</td>
                            </tr>
                            <tr>
                                <td>Sub Total</td>
                                <td>${sum_total.toFixed(2)}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="action-container">
                        <div className="passive-action">
                            <button onClick={handleCartAction}>
                                {cartData.some(cartItem => cartItem.title === selectedItem) ? 'Remove From Cart' : 'Add To Cart'}
                            </button>
                            <button onClick={handleWishlistAction}>
                                {wishlist.some(wish => wish.title === selectedItem) ? 'Remove From Wish' : 'Add To Wishlist'}
                            </button>
                        </div>
                        <div className="active-action">
                            <Link onClick={() => setShowMiniCart(true)}>
                                <button onClick={handleBuyNow}>
                                    Buy It Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Newsletter />
    </div>
  )
}

export default BookDetails
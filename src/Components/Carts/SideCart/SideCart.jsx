import React, { useContext } from 'react'
import { VBookContext } from '../../../VBookContext/VBookContext'
import { RiCloseFill, RiDeleteBinFill } from "react-icons/ri"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import "./sideCart.css"

const SideCart = () => {

    const {cartData, numCost, handleRemoveFromCart, setShowMiniCart, handleIncrement,handleDecrement,getItemTotalCost, getTotalCost} = useContext(VBookContext)

    return (
        <div className='sidecart-container'>
            <div className="sidecart-content">
                <div className="cart-header">
                    <h1>Your Cart</h1>
                    <div className="icon-con" onClick={() => setShowMiniCart(false)}>
                        <RiCloseFill className='icon'/>
                    </div>
                </div>
                <div className="cart-details">
                    { cartData.length > 0 ?
                        cartData.map((data, index) => (
                            <div className="cart" key={index}>
                                <h1 className='index'>{index + 1}.</h1>
                                <div className="cover-image">
                                    <img src={data.cover_image} alt='cover-image' />
                                </div>
                                <div className="book-details">
                                    <h3>{data.author}</h3>
                                    <h1>{data.title}</h1>
                                    <p>Format: {data.format}</p>
                                    <p>Language: {data.language}</p>
                                    <p>Publication Date: {data.publication_date}</p>
                                    <h4>${(getItemTotalCost(index)).toFixed(2)}</h4>
                                    <div className="action">
                                        <div className="counter-container">
                                            <div className="counter">
                                                <div className="border subtract" onClick={() => handleDecrement(index)}>-</div>
                                                <div className="border number">{numCost[index].count}</div>
                                                <div className="border add" onClick={() => handleIncrement(index)}>+</div>
                                            </div>
                                        </div>
                                        <div className="icon-con" onClick={() => handleRemoveFromCart(index)}>
                                            <RiDeleteBinFill className='icon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) :
                        <div className='empty-cart'>
                            <div className="icon-con">
                                <FaShoppingCart className='icon' />
                            </div>
                            <p>Empty Cart, Add to View Here.</p>
                        </div>
                    }
                </div>
                <div className="cart-summary">
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <p>${(getTotalCost()).toFixed(2)} USD</p>
                    </div>
                    <div className="info">
                        Taxes and shipping calculated at checkout
                    </div>
                    <div className="action-container">
                        <Link to={"/cart"}><button onClick={() => setShowMiniCart(false)}>View Cart</button></Link>
                        <button>Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideCart
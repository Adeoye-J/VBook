import React, { useContext } from 'react'
import { VBookContext } from '../../../VBookContext/VBookContext'
import { RiDeleteBinFill } from "react-icons/ri"
import { FaShoppingCart } from "react-icons/fa"
import MainHero from '../../../Containers/MainHero/MainHero'
import BookListing from '../../BookListing/BookListing'
import recommended_data from "../../../recommended_books.json"
import { Link } from 'react-router-dom'
import "./mainCart.css"

const MainCart = () => {

    const {cartData, numCost, handleRemoveFromCart, handleIncrement,handleDecrement,getItemTotalCost, getTotalCost, setSelectedItem} = useContext(VBookContext)

    return (
        <div className='maincart-container'>
            <MainHero section_title={"Shopping Cart"} main_header={"Shopping Cart"} />
            <div className="maincart-content">
                
                <div className="cart-details">
                    <table>
                        <thead>
                            <tr>
                                <th className='flex1'>S/N</th>
                                <th className='flex9'>Product</th>
                                <th className='flex3'>Quantity</th>
                                <th className='flex2'>Total</th>
                            </tr>
                        </thead>
                        <tbody >
                    {cartData.length > 0 && (
                        cartData.map((data, index) => (
                            <tr className="cart" key={index}>
                                <td className='flex1 index'>
                                    <h1 className='index'>{index + 1}.</h1>
                                </td>
                                <td className='flex9 product'>
                                    <div className="cover-image">
                                        <img src={data.cover_image} alt='cover-image' />
                                    </div>
                                    <div className="book-details">
                                        <h3>{data.author}</h3>
                                        <h1>{data.title}</h1>
                                        <h4>${data.cost}</h4>
                                        <p>Format: {data.format}</p>
                                        <p>Language: {data.language}</p>
                                        <p>Publication Date: {data.publication_date}</p>
                                        <div className="view-details" onClick={() => setSelectedItem(data.title)}>
                                            <Link to={"/all-books/bookdetails"}>
                                                <button>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </td>
                                <td className='flex3 action'>
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
                                </td>
                                <td className='flex2 price'>
                                    <h4>${(getItemTotalCost(index)).toFixed(2)}</h4>
                                </td>
                            </tr>
                        ))
                    )}
                        </tbody>
                    </table>
                </div>

                {cartData.length < 1 && (
                    <div className='empty-cart'>
                        <div className="icon-con">
                            <FaShoppingCart className='icon' />
                        </div>
                        <p>Empty Cart, Add to View Here.</p>
                        <div className="border-bottom"></div>
                    </div>
                )}

                <div className="continue-shopping">
                    <Link to={"/books"}>
                        <button>Continue Shopping</button>
                    </Link> 
                </div>

                <div className="cart-summary">
                    <div className="summary-content">
                        <div className="subtotal">
                            <p>Subtotal</p>
                            <p className='total-cost'>${(getTotalCost()).toFixed(2)} USD</p>
                        </div>
                        <div className="info">
                            Taxes and shipping calculated at checkout
                        </div>
                        <div className="action-container">
                            <Link to={"/checkout"}>
                                <button>Check Out</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <BookListing limit={3} dataType={recommended_data["recommended_books"]} title={"Recommended"}/>
        </div>
    )
}

export default MainCart
import React, { useContext } from 'react'
import { VBookContext } from '../../VBookContext/VBookContext'
import MainHero from '../../Containers/MainHero/MainHero'
import BookListing from '../BookListing/BookListing'
import Newsletter from '../../Containers/Newsletter/Newsletter'
import { FaHeart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import deals_data from "../../deals_books.json"
import "./wishlist.css"


const Wishlist = () => {

    const {wishlist} = useContext(VBookContext)

    return (
        <div>
            <MainHero section_title={"Wishlist"} main_header='Pages' />
            {
                wishlist > 0 
                ? <BookListing dataType={wishlist} title={"Wishlist"} />
                : <div className='empty-wishes'>
                    <div className="icon-con">
                        <FaHeart className='icon' />
                    </div>
                    <p>Nothing to Show, Add to View.</p>
                </div>
            }
            <div className="continue-shopping">
                <Link to={"/books"}><button>Continue Shopping</button></Link>
            </div>
            <BookListing limit={3} dataType={deals_data["deals_books"]} title={"Recommended"}/>
            <Newsletter />
        </div>
    )
}

export default Wishlist
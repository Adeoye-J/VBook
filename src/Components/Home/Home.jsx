import React, { useContext } from 'react'
import "./home.css"
import Hero from '../../Containers/Hero/Hero'
import Search from '../../Containers/SearchContainer/Search'
import Offers from '../../Containers/Offers/Offers'
import Newsletter from '../../Containers/Newsletter/Newsletter'
import SpecialOffer from '../../Containers/SpecialOffer/SpecialOffer'
import BookListing from '../BookListing/BookListing'
import trending_data from "../../trending_books.json"
import recommended_data from "../../recommended_books.json"
import deals_data from "../../deals_books.json"
import SideCart from '../Carts/SideCart/SideCart'
import { VBookContext } from '../../VBookContext/VBookContext'
import SearchResult from '../../Containers/SearchResult/SearchResult'


const Home = () => {

  const {showMiniCart} = useContext(VBookContext)

  return (
    <div home-container>
        {
          showMiniCart && 
          (<div className="minicart">
              <SideCart />
          </div>)
        }
        <Hero />
        <Offers />
        <Search />
        <SearchResult />
        <BookListing limit={3} dataType={deals_data["deals_books"]} title={"Deals"}/>
        <BookListing limit={3} dataType={trending_data["trending_books"]} title={"Trending"}/>
        <SpecialOffer />
        <BookListing limit={3} dataType={recommended_data["recommended_books"]} title={"Recommended"}/>
        <Newsletter />
    </div>
  )
}

export default Home


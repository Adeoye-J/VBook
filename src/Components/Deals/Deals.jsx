import React from 'react'
import "./deals.css"
import Newsletter from '../../Containers/Newsletter/Newsletter'
import BookListing from '../BookListing/BookListing'
import deals_data from "../../deals_books.json"
import MainHero from '../../Containers/MainHero/MainHero'


const Deals = () => {
  return (
    <div>
        <MainHero section_title={"Deals"} main_header='Pages' />
        <BookListing dataType={deals_data["deals_books"]} title={"Deals"} />
        <Newsletter />
    </div>
  )
}

export default Deals
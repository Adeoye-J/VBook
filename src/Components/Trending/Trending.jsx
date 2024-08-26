import React from 'react'
import "./trending.css"
import Newsletter from '../../Containers/Newsletter/Newsletter'
import BookListing from '../BookListing/BookListing'
import trending_data from "../../trending_books.json"
import MainHero from '../../Containers/MainHero/MainHero'

const Trending = () => {
  return (
    <div>
        <MainHero section_title={"Trends"} main_header='Pages' />
        <BookListing dataType={trending_data["trending_books"]} title={"Trending"} />
        <Newsletter />
    </div>
  )
}

export default Trending
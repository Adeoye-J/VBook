import React from 'react'
import "./books.css"
import BookListing from '../BookListing/BookListing'
import all_data from "../../all_books.json"
import Search from '../../Containers/SearchContainer/Search'
import Newsletter from '../../Containers/Newsletter/Newsletter'
import SearchResult from "../../Containers/SearchResult/SearchResult"
import MainHero from "../../Containers/MainHero/MainHero"

const Books = () => {

  return (
    <div>
      <MainHero section_title="All Books" main_header='Pages' />
      <Search />
      <SearchResult />
      <BookListing dataType={all_data} title={"All"} />
      <Newsletter />
    </div>
  )
}

export default Books
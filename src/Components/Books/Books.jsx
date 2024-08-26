import React from 'react'
import "./books.css"
import BookListing from '../BookListing/BookListing'
import all_data from "../../all_books.json"
import Search from '../../Containers/SearchContainer/Search'
import Newsletter from '../../Containers/Newsletter/Newsletter'

const Books = () => {

  return (
    <div>
        <Search />
        <BookListing dataType={all_data} title={"All"} />
        <Newsletter />
    </div>
  )
}

export default Books
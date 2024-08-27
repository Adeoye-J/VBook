import React, { useContext } from 'react'
import BookListing from '../../Components/BookListing/BookListing'
import all_data from "../../all_books.json" 
import { VBookContext } from '../../VBookContext/VBookContext'

const SearchResult = () => {

  const {search} = useContext(VBookContext)
  const data = all_data.filter((item) => ((item.title).toLowerCase()).includes(search.toLowerCase()))

  return (
    <div>
      {
        search.length &&
        <BookListing dataType={data} title={"Searched"} />
      }
    </div>
  )
}

export default SearchResult

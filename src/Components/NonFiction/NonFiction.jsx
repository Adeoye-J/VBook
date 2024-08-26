import React from 'react'
import "./nonFiction.css"
import Newsletter from '../../Containers/Newsletter/Newsletter'
import all_data from "../../all_books.json"
import BookListing from '../BookListing/BookListing'
import MainHero from '../../Containers/MainHero/MainHero'

const NonFiction = () => {

    const nonfiction_data = all_data.filter(data => data.type === "Non-Fiction")

  return (
    <div>
        <MainHero section_title={"Non-Fiction"} />
        <BookListing dataType={nonfiction_data} title={"Non-Fiction"} />
        <Newsletter />
    </div>
  )
}

export default NonFiction

import React from 'react'
import "./fiction.css"
import Newsletter from '../../Containers/Newsletter/Newsletter'
import all_data from "../../all_books.json"
import BookListing from '../BookListing/BookListing'
import MainHero from '../../Containers/MainHero/MainHero'

const Fiction = () => {

    const fiction_data = all_data.filter(data => data.type === "Fiction")

    return (
        <div>
            <MainHero section_title={"Fiction"} />
            <BookListing dataType={fiction_data} title={"Fiction"} />
            <Newsletter />
        </div>
    )
}

export default Fiction
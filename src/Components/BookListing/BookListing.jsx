import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import BookItem from '../../Containers/BookItem/BookItem'
import "./bookListing.css"
import { VBookContext } from '../../VBookContext/VBookContext'

const BookListing = ({dataType, limit = dataType.length, title}) => {

    const data = dataType

    const {setSelectedItem} = useContext(VBookContext)

    return (
        <div className='booklist-container'>
            <div className="booklist-content">
                <div className="booklist-info">
                    <h3>{title} Book(s)</h3>
                    <div className="underline"></div>
                </div>
                <div className="booklist-books">
                    {
                        data.slice(0, limit).map((item) => (
                            <div className="item-container" onClick={() => setSelectedItem(item.title)}>
                                <Link to={"/all-books/bookdetails"}>
                                    <BookItem bookcover={item.cover_image} author={item.author} title={item.title} cost={item.cost} key={item.title} />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BookListing
import React from 'react'
import "./bookItem.css"


const BookItem = ({bookcover, author, title, cost}) => {

    return (
        <div className='bookitem-container'>
            <div className="book-cover">
                <img src={bookcover} alt="Book Cover" />
            </div>
            <div className="book-details">
                <h1>{author}</h1>
                <h3>{title}</h3>
                <p>${cost}</p>
            </div>
        </div>
    )
}

export default BookItem
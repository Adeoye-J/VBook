import React, {useState, useEffect, useContext} from 'react'
import "./hero.css"
import hero_data from "../../hero_books.json"
import { Link } from 'react-router-dom'
import { VBookContext } from '../../VBookContext/VBookContext'

const Hero = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const {setSelectedItem} = useContext(VBookContext)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % hero_data.length)
    }, 9000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className='hero-container'>
      <div className='hero-carousel'>
        {
          hero_data.map((data, index) => (
            <div 
              className={`item ${index === activeIndex ? "index" : ""}`} 
              key={index.id}
            >
              <div className="image-container">
                <img src={data.cover_image} alt="book-image" />
              </div>
              <div className="item-info">
                <div className="title">
                  <h1>{data.title}</h1>
                  <span>Author: {data.author}</span>
                </div>
                <div className="description">
                  <p>{data.about_author}</p>
                </div>
                <div className="action" onClick={() => setSelectedItem(data.title)}>
                  <Link to={"/all-books/bookdetails"}><button>View Details</button></Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="carousel-indicators">
        {hero_data.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero

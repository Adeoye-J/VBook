import React from 'react'
import "./hero.css"
import hero_data from "../../heroContent.json"

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";


const Hero = () => {

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <div className='hero-container'>
      <div className='hero-carousel'>
        {/* <Slider {...settings}> */}
        {
          hero_data.map((data) => (
            <div className="item">
              <div className="image-container">
                <img src={data.image} alt="book-image" />
              </div>
              <div className="item-info">
                <div className="title">
                  <h1>{data.title}</h1>
                  <span>Author: {data.author}</span>
                </div>
                <div className="description">
                  <p>{data.description}</p>
                </div>
                <div className="action">
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          ))
        }
        {/* </Slider> */}
      </div>
    </div>
  )
}

export default Hero



// {
//   "title": "The Great Gatsby",
//   "author": "F. Scott Fitzgerald",
//   "description": "A classic novel of the Jazz Age, depicting the lavish and tragic life of Jay Gatsby and his unrequited love for Daisy Buchanan.",
//   "imageUrl": "https://example.com/images/the-great-gatsby.jpg",
//   "image": "/hero-images/The_Great_Gatsby.jpg"
// },
// {
//   "title": "To Kill a Mockingbird",
//   "author": "Harper Lee",
//   "description": "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
//   "imageUrl": "https://example.com/images/to-kill-a-mockingbird.jpg",
//   "image": "/hero-images/To_Kill_A_Mocking_Bird.jpg"
// },
// {
//   "title": "Pride and Prejudice",
//   "author": "Jane Austen",
//   "description": "A romantic novel of manners that depicts the emotional development of the protagonist, Elizabeth Bennet.",
//   "imageUrl": "https://example.com/images/pride-and-prejudice.jpg",
//   "image": "/hero-images/Pride_And_Prejudice.jpg"
// },
// {
//   "title": "The Catcher in the Rye",
//   "author": "J.D. Salinger",
//   "description": "A story about adolescent alienation and loss of innocence in the protagonist, Holden Caulfield.",
//   "imageUrl": "https://example.com/images/the-catcher-in-the-rye.jpg",
//   "image": "/hero-images/The_Catcher_in_the_Rye.jpg"
// }
import React from 'react'
import "./search.css"

const Search = () => {
  return (
    <div className='search-container'>
        <div className="center">
            <h1><span>E</span>xplore <span>B</span>ooks</h1>
            <form action="" className="form-container">
                <label htmlFor="">
                    <input type="text" placeholder='Explore Book Title ' />
                </label>
                <button>Locate Book</button>
            </form>
        </div>
    </div>
  )
}

export default Search
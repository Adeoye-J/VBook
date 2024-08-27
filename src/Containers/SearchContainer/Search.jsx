import React, { useContext } from 'react'
import "./search.css"
import { VBookContext } from '../../VBookContext/VBookContext'

const Search = () => {

  const {search, setSearch} = useContext(VBookContext)

  return (
    <div className='search-container'>
        <div className="center">
            <h1><span>E</span>xplore <span>B</span>ooks</h1>
            <form action="" className="form-container" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="">
                  <input 
                    type="text"
                    placeholder='Explore Book Title'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </label>
            </form>
        </div>
    </div>
  )
}

export default Search
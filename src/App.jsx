import './App.css'
import {Routes, Route} from "react-router-dom"
import NavBar from './Containers/NavBar/NavBar'
import Footer from './Containers/Footer/Footer'
import Home from './Components/Home/Home'
import Books from './Components/Books/Books'
import Trending from './Components/Trending/Trending'
import Deals from './Components/Deals/Deals'
import Fiction from './Components/Fiction/Fiction'
import NonFiction from './Components/NonFiction/NonFiction'
import {VBookProvider} from './VBookContext/VBookContext'
import BookDetails from './Components/BookDetails/BookDetails'
import MainCart from './Components/Carts/MainCart/MainCart'
import CheckOut from './Components/CheckOut/CheckOut'

function App() {
  return (
    <>
      <NavBar />
      <VBookProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/categories'>
            <Route path='fiction' element={<Fiction />} />
            <Route path="non-fiction" element={<NonFiction />} />
          </Route>
          <Route path='/pages'>
            <Route path='trending' element={<Trending />} />
            <Route path='deals' element={<Deals />} />
          </Route>
          <Route path='/all-books'>
            <Route path="bookdetails" element={<BookDetails />} />
          </Route>
          <Route path="/cart" element={<MainCart />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
      </VBookProvider>
      <Footer />
    </>
  )
}

export default App

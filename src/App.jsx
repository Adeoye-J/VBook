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
import Wishlist from './Components/Wishlist/Wishlist'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import ScrollToTop from './Containers/ScrollToTop/ScrollToTop'
import InvalidPage from './Components/InvalidPage/InvalidPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <VBookProvider>
      <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/categories'>
            <Route path='fiction' element={<Fiction />} />
            <Route path="non-fiction" element={<NonFiction />} />
          </Route>
          <Route path='/pages'>
            <Route path='trending' element={<Trending />} />
            <Route path='deals' element={<Deals />} />
            <Route path='wishlist' element={<Wishlist />} />
          </Route>
          <Route path='/all-books'>
            <Route path="bookdetails" element={<BookDetails />} />
          </Route>
          <Route path="/cart" element={<MainCart />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
        <Route path="*" element={<InvalidPage />}/>
      </VBookProvider>
      <Footer />
    </>
  )
}

export default App

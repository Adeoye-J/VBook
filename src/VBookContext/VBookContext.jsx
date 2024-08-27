import React, { createContext, useEffect, useState } from "react"
import all_data from "../all_books.json"


export const VBookContext = createContext();

export const VBookProvider = ({children}) => {

    const [selectedItem, setSelectedItem] = useState(null)
    const [cart, setCart] = useState([])
    const [cartData, setCartData] = useState([])
    const [showMiniCart, setShowMiniCart] = useState(false)
    const [numCost, setNumCost] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [search, setSearch] = useState("")

    const handleAddToCart = () => {
        const newItem = all_data.find(item => item.title === selectedItem)
        setCart(prevCart => [...prevCart, selectedItem])
        setCartData(prevCartData => [...prevCartData, newItem])
        setNumCost(prevNumCost => [...prevNumCost, { count: 1, cost: newItem['cost'] }])
        // setShowMiniCart(true)
    };

    const handleRemoveFromCart = (indexToRemove) => {
        // setShowMiniCart(true)
        setCart(prevCart => prevCart.filter((_, index) => index !== indexToRemove))
        setCartData(prevCartData => prevCartData.filter((_, index) => index !== indexToRemove))
        setNumCost(prevNumCost => prevNumCost.filter((_, index) => index !== indexToRemove))
    };

    const handleAddToWishlist = () => {
        const newItem = all_data.find(item => item.title === selectedItem)
        setWishlist(prevWishlist => [...prevWishlist, newItem])
    }

    const handleRemoveFromWishlist = (indexToRemove) => {
        setWishlist(prevWishlist => prevWishlist.filter((_, index) => index !== indexToRemove))
    }

    const handleIncrement = (index) => {
        setNumCost(prevNumCost => {
            const updatedNumCost = [...prevNumCost]

            updatedNumCost[index].count += 1

            return updatedNumCost
        })
    }

    const handleDecrement = (index) => {
        setNumCost(prevNumCost => {
            const updatedNumCost = [...prevNumCost]

            if (updatedNumCost[index].count > 1) {
                updatedNumCost[index].count -= 1
            }

            return updatedNumCost
        })
    }

    const getItemTotalCost = (index) => {
        const item = numCost[index]
        return item.count * item.cost    
    }

    const getTotalCost = () => {
        return numCost.reduce((total, item) => {
            return total + item.count * item.cost
        }, 0)
    }

    return(
        <VBookContext.Provider 
            value={{
                selectedItem, 
                setSelectedItem, 
                cart, 
                setCart, 
                handleAddToCart, 
                handleRemoveFromCart, 
                cartData, 
                setCartData, 
                showMiniCart, 
                setShowMiniCart, 
                numCost, 
                setNumCost,
                handleIncrement,
                handleDecrement,
                getItemTotalCost,
                getTotalCost, 
                wishlist, 
                setWishlist,
                handleAddToWishlist,
                handleRemoveFromWishlist, 
                search, 
                setSearch
            }}
        >
            {children}
        </VBookContext.Provider>
    )
}
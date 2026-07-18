import { createContext, useContext, useState } from "react"

const WishlistContext = createContext()


export function WishlistProvider({ children }) {

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist")

    return saved ? JSON.parse(saved) : []
  })


  const addToWishlist = (product) => {

    console.log("ADDING:", product)

    setWishlist((prev) => {

      const exists = prev.some(
        (item) => item.id === product.id
      )

      if (exists) {
        return prev
      }

      const updated = [...prev, product]

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updated)
      )

      return updated
    })

  }


  const removeFromWishlist = (id) => {

    setWishlist((prev) => {

      const updated = prev.filter(
        item => item.id !== id
      )

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updated)
      )

      return updated

    })

  }


  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  )

}


export const useWishlist = () =>
  useContext(WishlistContext)
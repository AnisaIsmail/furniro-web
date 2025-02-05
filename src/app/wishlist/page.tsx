'use client'

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { addToWishlist, removeFromWishlist } from "../redux/wishlistslice"

// Define a type for the wishlist item
interface WishlistItem {
  _id: string
  title: string
}

const Wishlist = () => {
  const dispatch = useDispatch()
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist)

  // Local state for storing wishlist from localStorage
  const [clientWishlist, setClientWishlist] = useState<WishlistItem[]>([])

  // Fetch wishlist from localStorage on client-side only
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist")
    if (storedWishlist) {
      const parsedWishlist = JSON.parse(storedWishlist) as WishlistItem[]
      setClientWishlist(parsedWishlist)
    }
  }, [])

  useEffect(() => {
    // Sync the clientWishlist with Redux
    clientWishlist.forEach((item: WishlistItem) => {
      if (!wishlist.find((WishlistItem) => WishlistItem._id === item._id)) {
        dispatch(addToWishlist(item))
      }
    })
  }, [clientWishlist, wishlist, dispatch])

  const handleRemove = (_id: string) => {
    dispatch(removeFromWishlist(_id))  // Remove from Redux
    const updatedWishlist = clientWishlist.filter((item) => item._id !== _id)  // Remove from local state
    setClientWishlist(updatedWishlist)
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))  // Sync with localStorage
  }

  useEffect(() => {
    if (clientWishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(clientWishlist))  // Keep localStorage updated
    }
  }, [clientWishlist])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-white p-4">
        <h1 className="text-3xl font-bold text-center text-black">Your Wishlist</h1>
      </header>

      <main className="container text-center mx-auto px-4 py-8">
        {clientWishlist.length === 0 ? (
          <p>Your Wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clientWishlist.map((item) => (
              <div key={item._id} className="border rounded-lg p-4 bg-white shadow-lg">
                <h2 className="text-xl font-semibold">{item.title}</h2>

                <button
                  className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                  onClick={() => handleRemove(item._id)} // Trigger remove
                >
                  Remove From Wishlist
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Wishlist

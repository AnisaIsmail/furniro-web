"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { removeFromCart, addToCart } from "@/app/redux/cartslice"
import Checkout from "../components/checkoutfunction"

// Define a type for the cart item
interface CartItem {
  _id: string
  title: string
  price: number
  quantity: number
}

const Cart = () => {
  const dispatch = useDispatch()
  const cartlist = useSelector((state: RootState) => state.cart.cart)

  // Local state for storing cart from localStorage
  const [clientCart, setClientCart] = useState<CartItem[]>([])

  // Fetch cart from localStorage on client-side only
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart) as CartItem[]
      setClientCart(parsedCart)
    }
  }, [])

  useEffect(() => {
    // Once clientCart is set, dispatch actions to sync with Redux
    clientCart.forEach((item: CartItem) => {
      if (!cartlist.find((cartItem) => cartItem._id === item._id)) {
        dispatch(addToCart(item))
      }
    })
  }, [clientCart, cartlist, dispatch])

  const handleRemove = (_id: string) => {
    dispatch(removeFromCart(_id))
    const updatedCartlist = clientCart.filter((item) => item._id !== _id)
    setClientCart(updatedCartlist)
    localStorage.setItem("cart", JSON.stringify(updatedCartlist))
  }

  useEffect(() => {
    if (clientCart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(clientCart))
    }
  }, [clientCart])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-white p-4">
        <h1 className="text-3xl font-bold text-center text-black">Your Cart</h1>
      </header>

      <main className="container text-center mx-auto px-4 py-8">
        {clientCart.length === 0 ? (
          <p>Your Cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clientCart.map((item) => (
              <div key={item._id} className="border rounded-lg p-4 bg-white shadow-lg">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <h3 className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold">${item.price * item.quantity}</span>
                </h3>

                <button
                  className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove From Cart
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Checkout />
        </div>
      </main>
    </div>
  )
}

export default Cart

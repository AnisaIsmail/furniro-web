'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, addToCart } from "@/app/redux/cartslice";
import Checkout from '../components/checkoutfunction';

const Cart = () => {
  const dispatch = useDispatch();
  const cartlist = useSelector((state: RootState) => state.cart.cart);
  const totalAmount = cartlist.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      parsedCart.forEach((item: any) => {
        if (!cartlist.find((cartItem) => cartItem._id === item._id)) {
          dispatch(addToCart(item));
        }
      });
    }
  }, [dispatch, cartlist]);

  const handleRemove = (_id: string) => {
    dispatch(removeFromCart(_id));
    const updatedCartlist = cartlist.filter(item => item._id !== _id);
    localStorage.setItem('cart', JSON.stringify(updatedCartlist));
  };

  useEffect(() => {
    if (cartlist.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartlist));
    }
  }, [cartlist]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-white p-4">
        <h1 className="text-3xl font-bold text-center text-black">Your Cart</h1>
      </header>

      <main className="container text-center mx-auto px-4 py-8">
        {cartlist.length === 0 ? (
          <p>Your Cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cartlist.map((item) => (
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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      <Checkout />
      </div>
      </main>
   
    </div>
  );
};

export default Cart;

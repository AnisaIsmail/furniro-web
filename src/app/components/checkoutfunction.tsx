'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateCartItemQuantity } from '../redux/cartslice';

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const [isClient, setIsClient] = useState(false);

  // Step 2: Use useEffect to set isClient after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (itemId: string, increment: boolean) => {
    const item = cartItems.find((item) => item._id === itemId);
    if (item) {
      const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;
      if (newQuantity >= 1) {
        dispatch(updateCartItemQuantity({ _id: itemId, quantity: newQuantity }));
      }
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Place Order</h2>
      <div className="border-b pb-4 mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Review Your Order</h3>
        {cartItems.map((item) => (
          <div key={item._id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg mb-4">
            {/* Product Name and Quantity Section */}
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold">{item.title}</span>
              {/* Quantity Control Section */}
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none transition-colors"
                  onClick={() => handleQuantityChange(item._id, false)}
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 focus:outline-none transition-colors"
                  onClick={() => handleQuantityChange(item._id, true)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Price Section */}
            <span className="text-lg font-bold">${item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="text-right mt-6">
        <p className="mb-6 text-xl font-bold text-gray-700"> ${totalAmount}</p>
        <a href="/checkout"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none transition-colors"
        >
          CheckOut
        </a>
      </div>
    </div>
  );
};

export default Checkout;

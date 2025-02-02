'use client'
import React, { useState } from 'react';

const QuantityControl = () => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  // Function to handle the quantity change
  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prevQuantity) => {
      const newQuantity = increment ? prevQuantity + 1 : prevQuantity - 1;
      return newQuantity >= 1 ? newQuantity : prevQuantity; // Prevent going below 1
    });
  };

  return (
    <div className="mt-6 flex items-center">
      <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Quantity</label>
      <div className="flex items-center ml-4">
        <button
          className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleQuantityChange(false)} // Decrease quantity
        >
          -
        </button>
        <span className="mx-2 text-lg">{quantity}</span> {/* Display the quantity */}
        <button
          className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleQuantityChange(true)} // Increase quantity
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityControl;

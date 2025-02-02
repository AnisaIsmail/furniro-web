'use client'
import React, { useState, useEffect } from 'react';

interface AddToCartButtonProps {
  productId: string;
  title: string;
  price: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId, title, price }) => {
  const [isInCart, setIsInCart] = useState<boolean>(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.some((item: { _id: string }) => item._id === productId)) {
      setIsInCart(true);
    }
  }, [productId]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (isInCart) {
      const updatedCart = cart.filter((item: { _id: string }) => item._id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { _id: productId, title, price, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    setIsInCart(!isInCart); // Toggle the state
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`px-4 py-2 font-semibold mt-4 rounded-md ${isInCart ? 'bg-green-600' : 'bg-blue-600'} text-white`}
    >
      {isInCart ? 'Remove from Cart' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton;
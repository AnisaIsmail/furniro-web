'use client'
import React, { useState, useEffect } from 'react';

interface WishlistButtonProps {
  productId: string;
  productTitle: string;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ productId, productTitle }) => {
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);

  // Check if the product is already in the wishlist
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (wishlist.some((item: { _id: string }) => item._id === productId)) {
      setIsInWishlist(true);
    }
  }, [productId]);

  // Add or remove the product from the wishlist
  const handleWishlistToggle = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (isInWishlist) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter((item: { _id: string }) => item._id !== productId);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    } else {
      // Add to wishlist
      const updatedWishlist = [...wishlist, { _id: productId, title: productTitle }];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    }

    setIsInWishlist(!isInWishlist); // Toggle the state 
  };

  return (
    <button
      onClick={handleWishlistToggle}
      className={`px-4 font-semibold mt-4 py-2 rounded-md ${isInWishlist ? 'bg-purple-800' : 'bg-blue-600'} text-white`}
    >
      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  );
};

export default WishlistButton;


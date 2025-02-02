 'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store'; 
import { removeFromWishlist, addToWishlist } from "@/app/redux/wishlistslice" 

const Wishlist = () => {
  const dispatch = useDispatch();
 
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist); 

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      const parsedWishlist = JSON.parse(storedWishlist);
     
      parsedWishlist.forEach((item: any) => {
        if (!wishlist.find((wishlistItem) => wishlistItem.id === item.id)) {
          dispatch(addToWishlist(item)); 
        }
      });
    }
   
  }, [dispatch, wishlist]); 

  
  const handleRemove = (id: string) => {
    dispatch(removeFromWishlist(id));
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); 
  };

  
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
    }
  }, [wishlist]); 

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-white p-4">
        <h1 className="text-3xl font-bold text-center text-black">Your Wishlist</h1>
      </header>

      <main className="container text-center mx-auto px-4 py-8">
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishlist.map((item: { id: string; title: string }) => (
              <div key={item.id} className="border rounded-lg p-4 bg-white shadow-lg">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                {/* Add any other product details here */}
            
                <button
                  className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                  onClick={() => handleRemove(item.id)} // Remove the item on click
                >
                  Remove From wishlist
                </button>
              </div>
              
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Wishlist;
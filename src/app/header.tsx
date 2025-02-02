'use client'
import React, { useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from '@/app/redux/store';
import { IoIosSearch, IoIosMenu, IoIosClose } from "react-icons/io";
import Image from 'next/image';

const Header = () => {
  const wishlistLength = useSelector((state: RootState) => state.wishlist.wishlist.length);
  const cartLength = useSelector((state: RootState) => state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)); // Total items in cart

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-100 px-4 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Furniro Logo"
            width={80}
            height={40}
            className="object-contain"
          />
          <p className="font-extrabold text-3xl hidden sm:block">Furniro</p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li><a href="/" className="text-gray-700 hover:text-gray-500">Home</a></li>
          <li><a href="/shop" className="text-gray-700 hover:text-gray-500">Shop</a></li>
          <li><a href="/blog" className="text-gray-700 hover:text-gray-500">Blog</a></li>
          <li><a href="/contact" className="text-gray-700 hover:text-gray-500">Contact</a></li>
        </ul>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          <a href="/searchbar" className="text-gray-700 hover:text-gray-500">
            <IoIosSearch size={24} />
          </a>
          <a href="/wishlist" className="relative text-gray-700 hover:text-gray-500">
            <FaRegHeart size={24} />
            {wishlistLength > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-sm text-white bg-red-500 rounded-full px-2 py-1 font-semibold">{wishlistLength}</span>
            )}
          </a>
          <a href="/cart" className="relative text-gray-700 hover:text-gray-500">
            <IoCartOutline size={24} />
            {cartLength > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-sm text-white bg-red-500 rounded-full px-2 py-1 font-semibold">{cartLength}</span>
            )}
          </a> 
          <a href="/admin" className="text-gray-700 hover:text-gray-500">
            <HiOutlineUser size={24} />
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-500">
            {menuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-4 py-2 shadow-md">
          <ul className="space-y-4">
            <li><a href="/" className="text-gray-700 hover:text-gray-500">Home</a></li>
            <li><a href="/shop" className="text-gray-700 hover:text-gray-500">Shop</a></li>
            <li><a href="/blog" className="text-gray-700 hover:text-gray-500">Blog</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-gray-500">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
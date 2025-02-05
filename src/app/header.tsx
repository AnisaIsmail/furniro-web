"use client"
import { useState } from "react"
import { IoCartOutline } from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa"
import { HiOutlineUser } from "react-icons/hi"
import { IoIosSearch, IoIosMenu, IoIosClose } from "react-icons/io"
import Image from "next/image"
import Link from "next/link"

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-gray-100 px-4 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Furniro Logo" width={80} height={40} className="object-contain" />
          <p className="font-extrabold text-3xl hidden sm:block">Furniro</p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-gray-700 hover:text-gray-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-gray-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-gray-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Action Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/searchbar" className="text-gray-700 hover:text-gray-500">
            <IoIosSearch size={24} />
          </Link>
          <Link href="/wishlist" className="relative text-gray-700 hover:text-gray-500">
            <FaRegHeart size={24} />
           
          </Link>
          <Link href="/cart" className="relative text-gray-700 hover:text-gray-500">
            <IoCartOutline size={24} />
         
          </Link>
          <Link href="/admin" className="text-gray-700 hover:text-gray-500">
            <HiOutlineUser size={24} />
          </Link>
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
            <li>
              <Link href="/" className="text-gray-700 hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-700 hover:text-gray-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-700 hover:text-gray-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-gray-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Header
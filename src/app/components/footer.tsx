import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-300">
      <div className="container mx-auto max-w-screen-xl p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Logo & Address */}
        <div className="w-full sm:w-[14rem]">
          <h2 className="font-bold text-2xl">Funiro.</h2>
          <p className="leading-none text-slate-400 mt-4 text-sm">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-gray-400">Links</h4>
          <ul className="font-bold mt-3 space-y-1">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-gray-400">Help</h4>
          <ul className="font-bold mt-3 space-y-1">
            <li>Payment Option</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-gray-400">Newsletter</h4>
          <div className="flex flex-col sm:flex-row items-center mt-3">
            <input
              type="text"
              className="flex-1 border-b-2 border-gray-500 text-sm outline-none p-1 w-full sm:w-auto"
              placeholder="Enter Your Email Address"
            />
            <button
              type="submit"
              className="font-bold mt-3 sm:mt-0 sm:ml-3 underline text-sm text-gray-500"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="container mx-auto max-w-screen-xl text-center py-4 mt-6 border-t">
        <p className="text-sm text-black">2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
}
import React from "react"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer p-5 border-t-2 leading-10 border-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="w-full sm:w-[14rem]">
            <h2 className="font-bold text-[2rem]">Funiro.</h2>
            <p className="leading-none text-slate-400 mt-10 text-sm">
              400 University Drive Suite 200 Coral Gables,
              FL 33134 USA
            </p>
          </div>

          <div>
            <h4 className="text-gray-400">Links</h4>
            <ul className="font-bold mt-3">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400">Help</h4>
            <ul className="font-bold mt-3">
              <li>Payment Option</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400">Newsletter</h4>
            <input
              type="text"
              className="mt-3 grid grid-col md:grid-cols-1 sm:w-[14rem] border-b-2 border-gray-500 text-sm outline-none"
              placeholder="Enter Your Email Address"
            />
            <button
              type="submit"
              className="w-full grid grid-col md:grid-cols-1 sm:w-auto font-bold mt-3 sm:mt-0 sm:ml-3 underline text-sm text-gray-500"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="absolute ml-8 translate-x-2 font-normal py-8 text-start mt-10 mb-[120px]">
          <hr />
          <p className="text-sm text-black">2023 Funiro. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

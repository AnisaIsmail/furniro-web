import React from 'react'
import { HiOutlineTrophy } from "react-icons/hi2";
import { SiAdguard } from "react-icons/si";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function Field() {
  return (
    <div className="bg-orange-100 py-8">
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        {/* Box-1 */}
        <div className="w-[260px] flex flex-col items-center gap-y-3">
          <div className="w-12 h-12 rounded-full bg-black flex justify-center items-center border-4 border-stone-400">
            <HiOutlineTrophy className="text-3xl text-white" />
          </div>
          <h1 className="font-bold text-center">High Quality</h1>
          <p className="text-sm text-center">Crafted from top materials</p>
        </div>

        {/* Box-2 */}
        <div className="w-[260px] flex flex-col items-center gap-y-3">
          <div className="w-12 h-12 rounded-full bg-black flex justify-center items-center border-4 border-stone-400">
            <SiAdguard className="text-3xl text-white" />
          </div>
          <h1 className="font-bold text-center">Warranty Protection</h1>
          <p className="text-sm text-center">Over 2 years</p>
        </div>

        {/* Box-3 */}
        <div className="w-[260px] flex flex-col items-center gap-y-3">
          <div className="w-12 h-12 rounded-full bg-black flex justify-center items-center border-4 border-stone-400">
            <LiaShippingFastSolid className="text-3xl text-white" />
          </div>
          <h1 className="font-bold text-center">Free Shipping</h1>
          <p className="text-sm text-center">Orders over $150</p>
        </div>

        {/* Box-4 */}
        <div className="w-[260px] flex flex-col items-center gap-y-3">
          <div className="w-12 h-12 rounded-full bg-black flex justify-center items-center border-4 border-stone-400">
            <TfiHeadphoneAlt className="text-3xl text-white" />
          </div>
          <h1 className="font-bold text-center">24/7 Support</h1>
          <p className="text-sm text-center">Dedicated support</p>
        </div>
      </div>
    </div>
  )
}
export default Field;
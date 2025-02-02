import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../public/shophero.png";

function ShopHeader() {
  return (
    <div className="relative">
        <div className="shopsect text-center p-4">
            {/* Header Image */}
            <Image
                src={Header}
                height={1000}
                width={1440}
                alt="header-image"
                className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h1 className="text-xl md:text-5xl font-semibold">Shop</h1>
                <div className="mt-4 text-gray-700 text-xs md:text-xl flex items-center">
                    <Link href="/" className="font-bold hover:underline">
                        Home
                    </Link>
                    <span className="font-bold mx-2">{'>'}</span>
                    <Link href="/blog" className="hover:underline">
                        Shop
                    </Link>
                </div>
        </div>
        </div>
    </div>
  );
}

export default ShopHeader;
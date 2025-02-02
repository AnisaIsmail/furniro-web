import Image from "next/image";
import Filter from "../../../public/filter.png"

export default function ShopBlow() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between w-full h-auto bg-[#F9F1E7] px-4 py-2 sm:py-0">
        {/* Left Section */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <Image src={Filter} width={20} alt="Filter Icon" />
          <p className="text-black text-sm font-medium">Filter</p>
          <p className="text-gray-500 text-sm font-normal hidden sm:block">
            | Showing 1–16 of 32 results
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 sm:mt-0 w-full sm:w-auto">
          {/* Show Input */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <p className="text-black text-sm font-medium">Show</p>
            <input
              className="w-full sm:w-12 h-8 bg-white border border-gray-300 text-center rounded-sm"
              type="text"
              placeholder="16"
            />
          </div>

          {/* Sort By Input */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <p className="text-black text-sm font-medium">Sort by</p>
            <input
              className="w-full sm:w-32 h-8 bg-white border border-gray-300 text-center rounded-sm"
              type="text"
              placeholder="Default"
            />
          </div>
        </div>
      </div>
    </>
  );
} 
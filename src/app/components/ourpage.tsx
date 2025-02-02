import React from 'react'

function Page() {
  return (
    <div>
        
        <div className="flex justify-center items-center gap-4 mx-auto my-12">
                        {/* Box 1 */}
                        <button className="bg-[#fff9e5] px-4 py-2 rounded-md cursor-pointer hover:bg-[#fbebb5]">1</button>

                        {/* Box 2 */}
                        <button className="bg-[#fff9e5] px-4 py-2 rounded-md cursor-pointer hover:bg-[#fbebb5]">2</button>

                        {/* Box 3 */}
                        <button className="bg-[#fff9e5] px-4 py-2 rounded-md cursor-pointer hover:bg-[#fbebb5]">3</button>

                        {/* Next Button */}
                        <button className="bg-[#fff9e5] px-4 py-2 rounded-md cursor-pointer hover:bg-[#fbebb5]">
                            Next
                        </button>
                    </div>
    </div>
  )
}

export default Page
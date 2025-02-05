'use client'
import React, { useState, useEffect } from "react";

interface PaginationProps {
  totalProducts: number;
  productsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalProducts,
  productsPerPage,
  currentPage,
  onPageChange,
}) => {
  const [isClient, setIsClient] = useState(false);
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Set isClient to true after component mounts on client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  if (!isClient) return null; // Avoid rendering before client-side

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <button
        className="px-4 py-2 bg-[#fff9e5] hover:bg-[#fbebb5] text-black rounded-md"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded-md ${page === currentPage ? "bg-[#fff9e5] hover:bg-[#fbebb5] text-black" : "bg-[#fff9e5] hover:bg-[#fbebb5]"}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="px-4 py-2 bg-[#fff9e5] hover:bg-[#fbebb5] text-black rounded-md"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;


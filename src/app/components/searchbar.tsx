'use client'
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Call the onSearch function when the user clicks the search icon
  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery); // Pass the search query to the parent component
  };

  return (
    <div className="flex items-center justify-center mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        className="border px-4 py-2 rounded-md text-sm"
        placeholder="Search for products..."
      />
      <a
        href="#"
        className="text-gray-700 hover:text-gray-500 ml-2"
        onClick={handleSearchClick}
      >
        <IoIosSearch size={24} />
      </a>
    </div>
  );
};

export default SearchBar;


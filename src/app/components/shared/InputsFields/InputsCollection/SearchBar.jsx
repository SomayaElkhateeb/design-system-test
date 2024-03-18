import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const handleDiscard = () => {
  //   setSearchTerm("");
  // };

  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto bg-gray-100 rounded-md px-3 py-2">
      <button type="button" className="flex items-center focus:outline-none">
        <IoSearch />
        <span className="text-sm text-gray-700">Search</span>
      </button>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      {/* <button
        type="button"
        onClick={handleDiscard}
        className="text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        Discard
      </button> */}
    </div>
  );
}

export default SearchBar;

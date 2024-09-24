import React from 'react';
import Image from 'next/image';
import SearchIcon from "@/app/assest/img/SearchIcon.png";

function SearchBar() {
  return (
    <div className="relative max-w-xs w-[468px] shadow-customSearch">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-8 py-2 pl-[2.5rem] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute inset-y-0 left-3 flex items-center pr-3">
        <Image src={SearchIcon} width="20" height="20" alt="Search Icon" />
      </div>
    </div>
  );
}

export default SearchBar;

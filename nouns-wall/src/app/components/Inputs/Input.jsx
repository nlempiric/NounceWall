"use client";
import React, { useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { HiSortDescending } from "react-icons/hi";
import { LiaSearchSolid } from "react-icons/lia";

const Input = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex gap-4">
      <div className="w-60 h-12 flex">
        <span className="w-24">
          <p className="bg-[#FFFFFF] h-12 flex items-center px-2 gap-2 border-2 border-[#4A5568] rounded-l-lg font-normal text-xs ">
            <HiSortDescending fontSize={20} />
            Sort By
          </p>
        </span>
        <div className="relative inline-block">
          <button
            className="bg-[#D9D9D9] h-12 px-4 w-36 flex items-center gap-2 border-2 border-[#4A5568] border-l-0 rounded-r-lg font-normal text-xs "
            onClick={toggleDropdown}
          >
            Creation Date <BiCaretDown fontSize={20} />
          </button>
          {isOpen && (
            <div className="w-full absolute block bg-[#D9D9D9] left-0 top-16 text-[16px] font-medium rounded-lg">
              <button className="w-full border-b-1 border-black py-3 hover:bg-[#4A5568]">
                Likes
              </button>
              <button className="w-full border-b-1 border-black py-3 hover:bg-[#4A5568]">
                Name
              </button>
              <button className="w-full py-3 hover:bg-[#4A5568]">
                Artist{" "}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-60 h-12 gap-2 flex items-center bg-[#D9D9D9] px-2 border-2 border-[#4A5568] rounded-lg">
        <input type="checkbox" value="test" />
        <span className="font-normal text-xs">Heads</span>
        <input type="checkbox" value="test" />
        <span className="font-normal text-xs">Accessories</span>
        <input type="checkbox" value="test" />
        <span className="font-normal text-xs">Glasses</span>
      </div>

      
      <div className="flex">
        <div className="relative w-fit ">
          <input
            type="search"
            id="search-dropdown"
            className="bg-[#D9D9D9] block p-2.5 w-full h-full z-20 text-sm text-gray-900 border-2 border-[#4A5568] rounded-lg dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white"
            placeholder="Search by name artist etc"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 bg-[#FFFFFF] text-sm font-medium h-full text-white border-2 border-[#4A5568] rounded-r-lg "
          >
            <LiaSearchSolid color="#4A5568" fontSize={20} />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;

"use client"
import React, { useState } from 'react'
import { HiSortDescending } from 'react-icons/hi'
import { BiCaretDown } from 'react-icons/bi'
import { LiaSearchSolid } from 'react-icons/lia'
import AccountImage from '../components/AccountImage/page'

const Community = () => {
    const [isOpen, setIsOpen] = useState(false);

        
    const AccountsData = [
        { id: 1, username: "User Name", image:'/slug 2.png' },
        { id: 2, username: "User Name", image:'/slug 2.png' },
        { id: 3, username: "User Name", image:'/slug 2.png' },
        { id: 4, username: "User Name", image:'/slug 2.png' },
        { id: 5, username: "User Name", image:'/slug 2.png' },
        { id: 6, username: "User Name", image:'/slug 2.png' },
        { id: 7, username: "User Name", image:'/slug 2.png' },
        { id: 8, username: "User Name", image:'/slug 2.png' },
        { id: 9, username: "User Name", image:'/slug 2.png' },
        { id: 10, username: "User Name", image:'/slug 2.png' },
     
      ];

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
    <div className="container mx-auto w-3/5 py-10 flex flex-col gap-10">
        <div className="flex gap-9">
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
                    Sign up Date <BiCaretDown fontSize={20} />
                </button>
                {isOpen && (
                    <div className="w-full absolute block bg-[#D9D9D9] left-0 top-16 text-[14px] border-2 border-[#4A5568] rounded-lg">
                        <button className="w-full border-b-2 border-[#4A5568] py-3 hover:bg-[#4A5568]">
                        Total Likes
                        </button>
                        <button className="w-full border-[#4A5568] py-3 hover:bg-[#4A5568]">
                            Name
                        </button>
                
                    </div>
                )}
                </div>
            </div>

            <div className="relative w-fit ">
            <input
                type="search"
                id="search-dropdown"
                className="bg-[#D9D9D9] block p-2.5 w-full h-full z-20 text-sm text-gray-900 border-2 border-[#4A5568] rounded-lg dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white"
                placeholder="Search artist "
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

        <div>
            <AccountImage AccountsData={AccountsData}/>
        </div>
        <div className="col-span-4 mt-28 ml-3 mr-3">
        <button className="w-full bg-[#FF443B] border-1 border-[#FFFFFF] rounded-md text-[#FFFFFF] p-3 text-base font-bold">
          Submit Your Trait
        </button>
      </div> 
    </div>
    </>
  )
}

export default Community

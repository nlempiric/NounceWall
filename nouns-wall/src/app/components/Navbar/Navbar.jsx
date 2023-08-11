import React, { useState } from "react";
import Image from "next/image";
import logoImage from "public/head-wall 2.png";
import modalImage from "public/noundryMAX 1.png";
import ModalComp from "../Modal/ModalComp";


import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { BiCaretDown } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#A19FA9] h-20 flex items-center lg:justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logoImage} />
          <div>
            <h1 className="text-2xl xl:text-lg font-[dg1]">Nouns Wall</h1>
            <p className="text-xs font-bold xl:text-[10px] font-[dg1]">
              Community-Sourced Traits
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-between">
          <div className="flex gap-6">
            <button
              className="bg-[#FF443B] border-2 border-black rounded-md text-white p-2 px-5 text-base font-bold"
              onClick={handleModalToggle}
            >
              Submit Your Trait
            </button>
            <div className="relative inline-block w-28 bg-[#D9D9D9] rounded-md items-center align-middle p-2 px-8 border-2 border-[#4A5568] text-base font-bold">
              <button
                className="flex gap-1 align-middle items-center "
                onClick={toggleDropdown}
              >
                How <BiCaretDown />
              </button>
              {isOpen && (
                <div className="absolute block bg-[#D9D9D9] z-20 left-0 top-12 list-none text-[14px] font-medium rounded-lg">
                  <button className="w-full border-b-1 border-black py-3">
                    guidelines
                  </button>
                  <button className="w-full border-b-1 border-black py-3">
                    Community
                  </button>
                  <button className="w-full py-3">Submit to DAO </button>
                </div>
              )}
            </div>
          </div>
          <div className="">
            <button className="bg-white border-2 border-black rounded-md text-black p-2 px-5 text-base font-bold">
              Connect
            </button>
          </div>
        </div>

      {isModalOpen ? <ModalComp setIsModalOpen={setIsModalOpen}/> : " "}
      </div>
    </div>
  );
};

export default Navbar;

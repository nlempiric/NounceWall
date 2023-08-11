"use client"
import React, { useState } from 'react';
import { BiCaretDown } from "react-icons/bi";

const Form = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(prevState => !prevState);
  // };

  // const [selectedOptions, setSelectedOptions] = useState([]);

  // const handleSelectChange = (event) => {
  //   const selectedValues = Array.from(event.target.selectedOptions, option => option.value);
  //   setSelectedOptions(selectedValues);
  // };

  

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

    <div className="relative">
    <select
      id="floatingSelect"
      className={`block w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 ${
        selectedOption ? 'border-blue-500' : 'border-gray-300'
      }`}
      onChange={handleSelectChange}
      value={selectedOption}
    >
      <option value="" disabled>
        Choose an option
      </option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    <label
      htmlFor="floatingSelect"
      className={`absolute top-0 left-3 px-1 text-xs ${
        selectedOption ? 'bg-white text-blue-500' : 'bg-transparent text-gray-500'
      } transition-all`}
    >
      Select an option
    </label>
  </div>
  //   <div className="relative">
  //   <label
  //     htmlFor="countries_multiple"
  //     className={`block mb-2 text-sm font-medium ${isLabelFloating ? 'floating-label' : ''}`}
  //   >
  //     Select an option
  //   </label>
  //   <select
  //     multiple
  //     id="countries_multiple"
  //     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //     onChange={handleSelectChange}
  //   >
  //     <option value="None" selected>None</option>
  //     <option value="US">United States</option>
  //     <option value="CA">Canada</option>
  //     <option value="FR">France</option>
  //     <option value="DE">Germany</option>
  //   </select>
  // </div>
  //   <div class="relative">
  //   <select multiple id="countries_multiple" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  //     <option value="" disabled selected>Choose countries</option>
  //     <option value="US">United States</option>
  //     <option value="CA">Canada</option>
  //     <option value="FR">France</option>
  //     <option value="DE">Germany</option>
  //   </select>
  //   <label for="countries_multiple" class="absolute left-2 -top-2 text-xs font-medium text-gray-500 dark:text-white transition-all">
  //     Select an option
  //   </label>
  // </div>
//     <>
//     <div><select id="countries" className="flex bg-transparent items-center justify-between gap-12 border-1 border-[#4A5568] px-8 p-2 py-3 rounded-2xl text-base font-medium">
//   <option>United States</option>
//   <option>Canada</option>
//   <option>France</option>
//   <option>Germany</option>
// </select></div>
// </>
    // <div>
    //   <button
    //     id="dropdownDefaultButton"
    //     classNameName="flex items-center justify-between gap-12 border-1 border-[#4A5568] px-4 p-2 py-3 rounded-2xl text-base font-medium"
    //     type="button"
    //     onClick={toggleDropdown}>
    //     Dropdown button{' '}
    //    <BiCaretDown fontSize={20}/>
    //   </button>

    //   {isDropdownOpen && (
    //     <div
    //       id="dropdown"
    //       classNameName="absolute z-10 bg-slate-100 rounded-md w-[232px] "
    //     >
    //       <ul classNameName="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
    //         <li>
    //           <a href="#" classNameName="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //             Dashboard
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" classNameName="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //             Settings
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" classNameName="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //             Earnings
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" classNameName="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //             Sign out
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
        
    //   )}
    // </div>
  );
};

export default Form;

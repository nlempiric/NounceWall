import React, { useState,useEffect } from "react";
import Image from "next/image";
import logoImage from "public/head-wall 2.png";
import modalImage from "public/noundryMAX 1.png";
import { BiCaretDown } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";


const ModalComp = ({setIsModalOpen}) => {
    // console.log("modalllllllllll",isModalOpen);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');
    const [selectedOption4, setSelectedOption4] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setimageUrl] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [radiovalue, setradisovalue] = useState(false);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleSelectChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };
    const handleSelectChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };
    const handleSelectChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };
    const handleSelectChange4 = (event) => {
        setSelectedOption4(event.target.value);
    };
   
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setimageUrl(URL.createObjectURL(event.target.files[0]))
    };

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleRadioChange=()=>
    {
        setradisovalue(true)
    }

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log("submitted")
        setIsModalOpen(false)
    }
 
    useEffect(() => {
      const inputElement = document.getElementById('trait_name');
      inputElement.classList.toggle('not-empty', inputValue.length > 0);
    }, [inputValue]);


  return (
    
       <div
          className={`fixed p-5 inset-y-44 z-[1055]  h-full w-full overflow-y-hidden overflow-x-hidden outline-none container`}
          id="exampleModalLg"
          aria-labelledby="exampleModalLgLabel"
          aria-modal="true"
          role="dialog"
        >
          <form onSubmit={handleSubmit} >
            <div className="pointer-events-auto relative flex w-full flex-col rounded-2xl border-2 border-[#4A5568] bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
              <div className="relative p-5">
                <div className="mb-3">
                  <div className="relative w-full">
                      <input
                          className={`relative m-0 block text-[#1F1D28] text-base w-full flex-auto rounded-t-xl rounded-b-xl border border-solid
                                      border-neutral-300 bg-clip-padding font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] 
                                      file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:text-[#1F1D28] 
                                      ${selectedFile ? 'file:bg-[#A6D4B3] border-1 border-green-800' : 'bg-[#EBEBEB]'} file:w-52 file:px-6 file:py-3 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px]
                                      file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200  focus:text-neutral-700 focus:shadow-te-primary
                                      focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 
                                      dark:focus:border-primary`}
                                      type="file"
                                      id="formFile"
                                      accept="image/*"
                                      onChange={handleFileChange}
                                      required/>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            {selectedFile && (
                            <FaCheck fontSize={20} fill="#478558"/>
                            )}
                        </div>
                  </div>
                </div>
                <div>
                  <label
                    for="trait_name"
                    className="block mb-2 font-medium text-[#1F1D28] text-base dark:text-white pl-2">
                    Name your trait
                  </label>
                
                  <input
                      type="text"
                      id="trait_name"
                      className={`bg-gray-50 border border-gray-300 text-[#1F1D28] text-base rounded-2xl block w-full p-2.5 focus:outline-none
                                  transition duration-300 ease-in-out 
                                  ${inputValue.length > 0 ? 'not-empty' : ''}`}
                      placeholder="ex: Island or Lightning-bolt"
                      onChange={handleInputChange}
                      required
                      pattern=".{1,}" />
                </div>

                
                <div className="pl-3">
                  <label
                      htmlFor="pick_type"
                      className="block mb-2 font-medium text-[#1F1D28] text-base dark:text-white pt-4">
                      Pick type
                  </label>
                  <div className="flex">
                      <div className="flex items-center mr-16">
                        <div className="form-group block relative">
                            <input
                            type="radio"
                            id="head"
                            name="type"
                            chec
                            className="form-radio h-5 w-5 text-green-500 checked:border-red checked hidden"
                            value="head"
                            // checked={selectedOption === 'head'}
                            onChange={handleRadioChange}
                            />
                            <label
                            htmlFor="head"
                            className="text-base font-normal text-[#1F1D28] relative before:contents-[''] before:relative before:bg-transparent before:inline-block before:align-middle before:cursor-pointer before:border-1 before:border-solid before:border-[#4A5568] before:p-[9px] before:mr-2"
                            >
                            Head
                            </label>
                        </div>
                      </div>
                      <div className="flex items-center mr-16">
                        <div className="form-group block relative">
                            <input
                            type="radio"
                            id="accessory"
                            name="type"
                            className="form-radio h-5 w-5 text-green-500 hidden"
                            value="accessory"
                            // checked={selectedOption === 'accessory'}
                            onChange={handleRadioChange}
                            />
                            <label
                            htmlFor="accessory"
                            className="text-base font-normal text-[#1F1D28] relative before:contents-[''] before:relative before:bg-transparent before:inline-block before:align-middle before:cursor-pointer before:border-1 before:border-solid before:border-[#4A5568] before:p-[9px] before:mr-2"
                            >
                            Accessory
                            </label>
                        </div>
                      </div>
                      <div className="flex items-center mr-16">
                        <div className="form-group block relative">
                            <input
                            type="radio"
                            id="glasses"
                            name="type"
                            className="form-radio h-5 w-5 text-green-500 checked:border-red checked hidden"
                            value="glasses"
                            // checked={selectedOption === 'glasses'}
                            onChange={handleRadioChange}
                            />
                            <label
                            htmlFor="glasses"
                            className="text-base font-normal text-[#1F1D28] relative before:contents-[''] before:relative before:bg-transparent before:inline-block before:align-middle before:cursor-pointer before:border-1 before:border-solid before:border-[#4A5568] before:p-[9px] before:mr-2"
                            >
                            Glasses
                            </label>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className={`bg-[#D9D9D9] border-y-2 border-[#4A5568] p-3 flex justify-around ${ selectedFile == null || inputValue == ""  || radiovalue ==false ? "bg-[#D9D9D9]" : "bg-white"}`}>
                <div className="flex flex-col gap-3">
                  <button className={`border-1 border-[#4A5568] w-52 p-2 py-3 rounded-2xl text-base font-medium ${selectedFile == null || inputValue == ""  || radiovalue ==false ? " " : "bg-[#A6D4B3]"}`}>Generate</button>
                      <div className="relative border-1 border-[#4A5568] rounded-2xl">
                          <select
                              id="floatingSelect"
                              className={`flex bg-transparent items-center justify-between w-52 gap-12  px-4 p-2 py-3 text-base font-medium appearance-none focus:outline-none ${
                                  selectedOption ? 'border-blue-500' : 'border-gray-300'
                              }`}
                              onChange={handleSelectChange}
                              disabled={selectedFile == null || inputValue == ""  || radiovalue ==false ? true : false}
                              value={selectedOption}
                              >
                              <option value="None" selected>None</option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                              <option value="option3">Option 3</option>
                          </select>
                          <span className="absolute left-44 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <BiCaretDown fontSize={20}/>
                          </span>
                          <label
                          htmlFor="floatingSelect"
                          className={`absolute top-[3px] left-3 px-1 text-xs ${
                              selectedOption ? 'bg-transparent text-gray-500' : 'bg-transparent text-gray-500'
                          } transition-all`}
                          >
                          Background
                          </label>
                      </div>
                      <div className="relative border-1 border-[#4A5568] rounded-2xl">
                          <select
                          id="floatingSelect1"
                          className={`flex bg-transparent items-center justify-between w-52 gap-12  px-4 p-2 py-3 text-base font-medium appearance-none focus:outline-none  ${
                              selectedOption ? 'border-blue-500' : 'border-gray-300'
                          }`}
                          onChange={handleSelectChange1}
                          disabled={selectedFile == null || inputValue == ""  || radiovalue ==false ? true : false}
                          value={selectedOption1}
                          >
                          <option value="None" selected>None</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                          </select>
                          <span className="absolute left-44 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <BiCaretDown fontSize={20}/>
                          </span>
                          <label
                          htmlFor="floatingSelect1"
                          className={`absolute top-[3px] left-3 px-1 text-xs ${
                              selectedOption ? 'bg-transparent text-gray-500' : 'bg-transparent text-gray-500'
                          } transition-all`}
                          >
                          Body
                          </label>
                      </div>
                      <div className="relative border-1 border-[#4A5568] rounded-2xl">
                          <select
                          id="floatingSelect2"
                          className={`flex bg-transparent items-center justify-between w-52 gap-12  px-4 p-2 py-3 text-base font-medium appearance-none focus:outline-none  ${
                              selectedOption ? 'border-blue-500' : 'border-gray-300'
                          }`}
                          onChange={handleSelectChange2}
                          disabled={selectedFile == null || inputValue == ""  || radiovalue ==false ? true : false}
                          value={selectedOption2}
                          >
                          <option value="None" selected>None</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                          </select>
                          <span className="absolute left-44 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <BiCaretDown fontSize={20}/>
                          </span>
                          <label
                          htmlFor="floatingSelect2"
                          className={`absolute top-[3px] left-3 px-1 text-xs ${
                              selectedOption ? 'bg-transparent text-gray-500' : 'bg-transparent text-gray-500'
                          } transition-all`}
                          >
                          Accessory
                          </label>
                      </div>
                      <div className="relative border-1 border-[#4A5568] rounded-2xl">
                          <select
                          id="floatingSelect3"
                          className={`flex bg-transparent items-center justify-between w-52 gap-12  px-4 p-2 py-3 text-base font-medium appearance-none focus:outline-none  ${
                              selectedOption ? 'border-blue-500' : 'border-gray-300'
                          }`}
                          onChange={handleSelectChange3}
                          disabled={selectedFile == null || inputValue == ""  || radiovalue ==false ? true : false}
                          value={selectedOption3}
                          >
                          <option value="None" selected>None</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                          </select>
                          <span className="absolute left-44 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <BiCaretDown fontSize={20}/>
                          </span>
                          <label
                          htmlFor="floatingSelect3"
                          className={`absolute top-[3px] left-3 px-1 text-xs ${
                              selectedOption ? 'bg-transparent text-gray-500' : 'bg-transparent text-gray-500'
                          } transition-all`}
                          >
                          Head
                          </label>
                      </div>
                      <div className="relative border-1 border-[#4A5568] rounded-2xl">
                          <select
                          id="floatingSelect4"
                          className={`flex bg-transparent items-center justify-between w-52 gap-12  px-4 p-2 py-3 text-base font-medium appearance-none focus:outline-none  ${
                              selectedOption ? 'border-blue-500' : 'border-gray-300'
                          }`}
                          onChange={handleSelectChange4}
                          disabled={selectedFile == null || inputValue == ""  || radiovalue ==false ? true : false}
                          value={selectedOption4}
                          >
                          <option value="None" selected>None</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                          </select>
                          <span className="absolute left-44 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <BiCaretDown fontSize={20}/>
                          </span>
                          <label
                          htmlFor="floatingSelect4"
                          className={`absolute top-[3px] left-3 px-1 text-xs ${
                              selectedOption ? 'bg-transparent text-gray-500' : 'bg-transparent text-gray-500'
                          } transition-all`}
                          >
                          Glasses
                          </label>
                      </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[288px] h-[288px] relative ">
                    <Image style={{objectFit:"cover"}} src={selectedFile==null ?  modalImage : imageUrl} fill={true} alt="Image"/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-around py-6 gap-2">
                <div className="flex mx-24">
                  <p className="text-base font-medium">Your Twitter Handle</p>
                </div>
                <div className="flex justify-around">
                <div className="flex flex-col gap-1">
                  
                  <input
                    type="text"
                    id="trait_name"
                    className="bg-gray-50 border border-gray-300 text-[#1F1D28] text-base rounded-t-xl rounded-b-xl focus:ring-blue-500 focus:border-blue-500 block w-72 py-1.5 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ex:@ElonMusk"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <button type="submit" className="border-1 border-[#4A5568] bg-[#C6322B] w-72 py-1 rounded-2xl text-lg font-bold text-white" >
                      Submit</button>
                </div>
                </div>
              </div>
            </div>
          </form>
        </div>
    
  )
}

export default ModalComp

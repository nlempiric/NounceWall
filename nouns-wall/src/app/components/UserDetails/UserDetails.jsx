"use client"
import React, { useState } from "react";
import Image from 'next/image'
import userImage from "public/pfp discord 1.png";
import Button from '../Button/Button';
import { BsSuitHeartFill } from 'react-icons/bs'
import UserAccountGallary from '../UserAccountGallary/UserAccountGallary';

const UserDetails = () => {

    
    const userTraits = [
        { id: 1, title: "Picture-title", likes: 18 },
        { id: 2, title: "picture-title", likes: 132 },
        
      ];
    const userFavouriteData = [
        { id: 1, title: "Picture-title", likes: 18 },
        { id: 2, title: "picture-title", likes: 132 },
        { id: 3, title: "picture-title", likes: 132 },
        { id: 4, title: "picture-title", likes: 132 },
        
      ];

  return (
    <>
      <div className="container mx-auto flex flex-col py-10 text-white gap-5">
        <div className="">
            <Image src={userImage}/>
        </div>
        <div className="flex gap-4 items-center">
            <h1 className="font-[dg1] text-3xl">User Name</h1>
            <p className="text-sm">@User_Twitterhandle_as_a_link</p>
        </div>
        <div className="flex gap-56">
            <div className="flex gap-3">
                <Button url="#" text="2 Heads"/>
                <Button url="#" text="0 Accesories"/>
                <Button url="#" text="0 Glasses"/>
            </div>
            <div>
                {/* <BsSuitHeartFill/> */}
                {/* <Button url="#" text={`${<BsSuitHeartFill/>}`}/> */}
                <button className="w-fit bg-[#D9D9D9] p-2 px-3 border-1 border-[#4A5568] rounded-lg text-black text-sm flex items-center gap-1"><BsSuitHeartFill color='red'/>132</button>
            </div>
        </div>
        <div className="w-[570px]">
            <p className="text-sm">A 240 characters max sentence about the user adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                 Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                 pellentesque eu
            </p>
        </div>
        <div className='flex flex-col gap-4 py-8'>
            <h1 className="font-[dg1] text-2xl">Traits</h1>
            <UserAccountGallary  userFavouriteData={userTraits}/>
        </div>
        <div className='flex flex-col gap-4 py-8'>
            <h1 className="font-[dg1] text-2xl">Favorites</h1>
            <UserAccountGallary  userFavouriteData={userFavouriteData}/>
        </div>
       
      </div>
    </>
  )
}

export default UserDetails

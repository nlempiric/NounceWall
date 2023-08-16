"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import TopModalImage from 'public/slug 1.png'
import { BsSuitHeartFill } from 'react-icons/bs'


const UserTrait = () => {
    const gridData1=[
        { id: 1, image:'/slug.png' },
        { id: 2, image:'/slug.png' },
        { id: 3, image:'/slug.png' },
        { id: 4, image:'/slug.png' },
        { id: 5, image:'/slug.png' },
        { id: 6, image:'/slug.png' },
        { id: 7, image:'/slug.png' },
        { id: 8, image:'/slug.png' },
        { id: 9, image:'/slug.png' },
        { id: 10, image:'/slug.png' },
        { id: 11, image:'/slug.png' },
        { id: 12, image:'/slug.png' },
        { id: 13, image:'/slug.png' },
        { id: 14, image:'/slug.png' },
        { id: 15, image:'/slug.png' },
        { id: 16, image:'/slug.png' },
    ]
    const [gridData, setGridData] = useState(gridData1);

    const handleGrid=()=>
    {
        const gridData2=[
            { id: 1, image:'/slug.png' },
            { id: 2, image:'/slug.png' },
            { id: 3, image:'/slug.png' },
            { id: 4, image:'/slug.png' },
            { id: 5, image:'/slug.png' },
            { id: 6, image:'/slug.png' },
            { id: 7, image:'/slug.png' },
            { id: 8, image:'/slug.png' },
            { id: 9, image:'/slug.png' },
            { id: 10, image:'/slug.png' },
            { id: 11, image:'/slug.png' },
            { id: 12, image:'/slug.png' },
            { id: 13, image:'/slug.png' },
            { id: 14, image:'/slug.png' },
            { id: 15, image:'/slug.png' },
            { id: 16, image:'/slug.png' },
        ]
        // gridData.push(...gridData1);
        setGridData((prevGridData) => [...prevGridData, ...gridData2]);
        console.log("ftaaaaaaaaaaa",gridData)
        
    }
  return (
    <>
      <div className="bg-white container mx-auto w-3/5 my-5 text-black py-8 border-2 border-[#4A5568] rounded-xl">
        <div className="container mx-auto w-3/5">
           
                    <h1 className="font-[dg1] text-xl">Venus flytrap</h1>
                    <p className="text-sm">Head Trait</p>
                    <div className="flex items-center w-full py-3">
                    
                        <Image style={{objectFit:"fill",width:"100%"}} src={TopModalImage} alt="Image"/>
                    
                    </div>
                    <div className="flex justify-between">
                        <p>Created on 08/0/2023 by UserName.</p>
                        <p className="flex items-center gap-2"><BsSuitHeartFill color='red'/>0</p>
                    </div>
                    <button className="w-fit text-white bg-[#FF443B] p-2 px-6 border-1 border-[#1F1D28] rounded-lg mt-10" onClick={handleGrid}>Generate</button>
                    <div className="grid grid-cols-4 gap-4 py-6">
                    {gridData.map((igrid)=>
                    (
                        <div key={igrid.id} className="w-full h-full">
                            <Image src={igrid.image} width={130} height={100} style={{objectFit:"fill",borderRadius:"12px"}} alt="Image"/>
                        </div>
                    ))}
                    </div>
            
        </div> 
      </div>
    </>
  )
}

export default UserTrait

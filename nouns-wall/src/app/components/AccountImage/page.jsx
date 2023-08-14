import React from 'react'
import Image from 'next/image'

const AccountImage = ({AccountsData}) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-3 py-6">
        {AccountsData.map((data)=>
        (
            <div className="w-fit flex flex-col justify-center items-center gap-2 mt-7">
                <Image src={data.image} width={185} height={220} className="rounded-full"/>
                <p className="font-[dg1] text-[14px] text-white">{data.username}</p>
            </div>
        ))}
      </div>
    </>
  )
}

export default AccountImage

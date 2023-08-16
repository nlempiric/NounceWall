import React from 'react'
import flogoImage from 'public/NDthing 1.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-[#43414C] h-36 flex justify-between items-center">
      <div className="container mx-auto w-3/5 flex justify-between items-center text-white">
        <div>
            <Image src={flogoImage} alt="Image"/>
        </div>
        <div>
            <p className='py-1 font-normal text-xs'>Guidelines</p>
            <p className='py-1 font-normal text-xs'>Community</p>
            <p className='py-1 font-normal text-xs'>Submit</p>
        </div>
        <div>
            <p className='font-normal text-xs'>Check out</p>
            <p className="text-sm font-[dg1] py-1">Noundry Studio</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

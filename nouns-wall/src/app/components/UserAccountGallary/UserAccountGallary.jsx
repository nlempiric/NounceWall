import React from 'react'
import Image from 'next/image'
import bannerImage from "public/banner.png";
import slug from "public/slug.png";
import fstar from "public/fill_star.png";
import heart from "public/heart.png";
import Link from 'next/link';
// import { useRouter } from 'next/router';

const UserAccountGallary = ({userFavouriteData,setIsModalOpen,isModalOpen}) => {
    // const router = useRouter();


  return (
    <>
    <Link href="/UserTrait">
    <div className="flex gap-3">
    {userFavouriteData.map((card)=>
    (
        <div key={card.id} className="bg-white relative w-fit text-black p-2" >
            <div>
                <Image src={slug}/>
            </div>
            <div className="flex justify-between pt-1">
                <p className="mr-2">{card.title}</p>
                <div className="flex items-center">
                <Image src={heart} className="mr-1" />
                <p className="">212</p>
                </div>
            </div>
        </div>
    ))

    }
    </div>
    </Link>
    </>
  )
}

export default UserAccountGallary

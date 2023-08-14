import React from "react";
import Image from "next/image";
import bannerImage from "public/banner.png";
import slug from "public/slug.png";
import fstar from "public/fill_star.png";
import heart from "public/heart.png";

const Gallery = ({imageCardData}) => {
  

  return (
    <div className="container grid grid-cols-4 gap-4 mt-6">
      {/* Banner Image */}
      {/* <div className="col-span-4">
        <Image src={bannerImage} className="w-full h-auto" />
      </div> */}

      {/* Image Cards */}
      {imageCardData.map((card) => (
        <div key={card.id} className="bg-white p-2 ">
          <div className="relative ">
            {/* Main Image */}
            <div className="h-[185px] max-w-[216px] w-full">
              <Image
                src={slug}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Star Icon */}
            <Image src={fstar} className="absolute top-0 left-0 " />

            {/* Title and Heart */}
            <div className="flex justify-between pt-2">
              <p className="mr-2">{card.title}</p>
              <div className="flex items-center">
                <Image src={heart} className="mr-1" />
                <p className="">{card.likes}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="col-span-4 mt-28 ml-3 mr-3">
        <button className="w-full bg-[#FF443B] border-1 border-[#FFFFFF] rounded-md text-[#FFFFFF] p-3 text-base font-bold">
          Submit Your Trait
        </button>
      </div> */}

    </div>
  );
};

export default Gallery;

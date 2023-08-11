import React from "react";
import Image from "next/image";
import bannerImage from "public/banner.png";
import slug from "public/slug.png";
import fstar from "public/fill_star.png";
import heart from "public/heart.png";

const Gallery = () => {
  const imageCardData = [
    { id: 1, title: "Picture-title", likes: 18 },
    { id: 2, title: "Another picture-title", likes: 132 },
    { id: 3, title: "Another picture-title", likes: 132 },
    { id: 4, title: "Another picture-title", likes: 132 },
    { id: 5, title: "Picture-title", likes: 18 },
    { id: 6, title: "Another picture-title", likes: 132 },
    { id: 7, title: "Another picture-title", likes: 132 },
    { id: 8, title: "Another picture-title", likes: 132 },
    { id: 9, title: "Picture-title", likes: 18 },
    { id: 10, title: "Another picture-title", likes: 132 },
    { id: 11, title: "Another picture-title", likes: 132 },
    { id: 12, title: "Another picture-title", likes: 132 },
    { id: 13, title: "Picture-title", likes: 18 },
    { id: 14, title: "Another picture-title", likes: 132 },
    { id: 15, title: "Another picture-title", likes: 132 },
    { id: 16, title: "Another picture-title", likes: 132 },
    { id: 17, title: "Picture-title", likes: 18 },
    { id: 18, title: "Another picture-title", likes: 132 },
    { id: 19, title: "Another picture-title", likes: 132 },
    { id: 20, title: "Another picture-title", likes: 132 },
  ];

  return (
    <div className="container grid grid-cols-4 gap-4">
      {/* Banner Image */}
      <div className="col-span-4">
        <Image src={bannerImage} className="w-full h-auto" />
      </div>

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

      <div className="col-span-4 mt-28 ml-3 mr-3">
        <button className="w-full bg-[#FF443B] border-1 border-[#FFFFFF] rounded-md text-[#FFFFFF] p-3 text-base font-bold">
          Submit Your Trait
        </button>
      </div>

    </div>
  );
};

export default Gallery;

import Image from 'next/image'
import './globals.css'
import Input from './components/Inputs/Input'
import Gallary from './components/Imagegallay/gallary'
import bannerImage from "public/banner.png";


export default function Home() {
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
   <>
    <div className='container mx-auto w-3/5 my-12'>
      <Input/>
      <div className="col-span-4">
        <Image src={bannerImage} className="w-full h-auto" />
      </div>
      <Gallary imageCardData={imageCardData}/> 
      <div className="col-span-4 mt-28 ml-3 mr-3">
        <button className="w-full bg-[#FF443B] border-1 border-[#FFFFFF] rounded-md text-[#FFFFFF] p-3 text-base font-bold">
          Submit Your Trait
        </button>
      </div> 
    </div>
   </>
  )
}

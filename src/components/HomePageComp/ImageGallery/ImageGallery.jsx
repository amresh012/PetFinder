// import React from 'react'
// import { FaPaw } from "react-icons/fa";
import Slider from "../../CommanComponent/Slider/Slider";
import PetCard from "../../FindPetPageComponent/PetCard";
const ImageGallery = () => {
  return (
    <div className="  bg-slate-100 flex flex-col items-center justify-center">
      <div className="title flex items-center  justify-center gap-2">
        <div className="h-[3px] w-12 bg-blue-500 animate-pulse"></div>
        <h1 className="text-blue-400 m-4  uppercase">Image Tour</h1>
        <div className="h-[3px] w-12 bg-blue-500 animate-pulse"></div>
      </div>
      <div className="relative mb-12">
        <h1 className="text-8xl text-blue-500 z-10">Gallery</h1>
      </div>
      <Slider>
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </Slider>
    </div>
  );
};

export default ImageGallery;

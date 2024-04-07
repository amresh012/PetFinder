// import React from 'react'
import PetCard from "../FeaturedPet/PetCard";
import { Link } from "@mui/material";
import { FaArrowRight, FaPaw } from "react-icons/fa";
// import Slider from "../../CommanComponent/Slider/Slider";

const Adoption = () => {
  return (
    <div className="Adoption flex flex-col items-center justify-around ">
      <div className="heading flex flex-col  items-center justify-center">
        <div className="title flex items-center  justify-center gap-2">
          <div className="h-[3px] w-12 bg-blue-500 animate-pulse"></div>
          <h1 className="text-white m-4  uppercase">FIND YOUR FRIEND</h1>
          <div className="h-[3px] w-12 bg-blue-500 animate-pulse"></div>
        </div>
        <h1 className=" uppercase text-white text-center text-[5vmax] font-extrabold tracking-wider">
          ADOPTION
        </h1>
        <div className="icon flex gap-2 text-blue-600  opacity-75 animate-bounce  p-2">
          <FaPaw size={40} />
        </div>
      </div>
      {/*  */}
      <div className="w-full flex flex-col items-center justify-around gap-2">
        <h1 className="text-white text-2xl font-bold">
          Adopting is an act of{" "}
          <span className=" text-fuchsia-500 font-bold animate-pulse">
            love
          </span>
        </h1>
        <p className="text-xl text-center font-medium text-zinc-200">
          Etiam rhoncus leo a dolor placerat, nec elem entum ipsum convall.
        </p>
        <p className=" w-full lg:w-1/2 text-center text-white">
          Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet
          nibh hendrerit id Maecenas at arcu ro In aliquet magna nec lobortis
          maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum
          convall.
        </p>
      </div>
      {/* carousal */}
      <div className=" flex  flex-col bg-white/20 backdrop-blur-md lg:w-[80%]  items-center justify-around m-4 gap-12 rounded-lg">
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-around items-center mt-12">
          <h1 className="text-2xl text-white font-medium text-center">
            Read About Adoption Stories Across The World!
          </h1>
          <button className="bg-blue-500 text-white px-8 py-2 rounded-full flex items-center justify-around gap-2">
            View More
            <FaArrowRight className="animate-pulse" />
          </button>
        </div>
        <div className="">
          <PetCard />
        </div>
      </div>

      <div className="AdoptionGallery mt-12 bg-blue-500 rounded-full m-4">
        <Link to="/">
          <button className="text-white text-xl px-6 py-2 shadow-md">
            See Adoption Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Adoption;

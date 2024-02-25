// import React from 'react'
import { Link } from "@mui/material";
import PetCard from "../../FindPetPageComponent/PetCard";
import { FaChevronLeft, FaChevronRight, FaPaw } from "react-icons/fa";

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
          <span className=" text-fuchsia-500 font-bold">love</span>
        </h1>
        <p className="text-xl font-medium text-zinc-200">
          Etiam rhoncus leo a dolor placerat, nec elem entum ipsum convall.
        </p>
        <p className="w-1/2 text-center text-white">
          Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet
          nibh hendrerit id Maecenas at arcu ro In aliquet magna nec lobortis
          maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum
          convall.
        </p>
      </div>
      {/* carousal */}
      <div className="container flex  items-center  justify-around m-8 p-5">
        <button className="text-4xl bg-white rounded-full p-4 text text-center font-bold aactive:bg-gray-200 active:scale-95 shadow-md">
          <FaChevronLeft />
        </button>
        <Link to="/adopt" class="flex items-center justify-around w-full">
          <PetCard />
          <PetCard />
          <PetCard />
        </Link>
        <button className="text-4xl bg-white rounded-full p-4 text text-center font-bold shadow-md">
          <FaChevronRight />
        </button>
      </div>
      <div className="">
        <input type="radio" name="" id="" checked="false" />
        <input type="radio" name="" id="" />
      </div>
      <div className="AdoptionGallery bg-blue-500 rounded-full m-4">
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

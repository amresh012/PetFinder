// import React from 'react'
import {Avatar} from "@mui/material"
import {  FaChevronRight } from "react-icons/fa";
const PetProfile = () => {
  return (
    <div className="border border-black/20 p-2">
      <div className="flex w-full items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Avatar sx={{height:24 , width:24}}>F</Avatar>
          <h1 className="text-xs font-bold">Fluffy</h1>
        </div>
        <button className="border border-black px-4 py-1 flex items-center gap-1 text-xs">
          View Profile <FaChevronRight />
        </button>
      </div>
      <div className="image">
        <img
          src="/public/PetImage/lovely-dog-posing-garden_23-2147997370.avif"
          alt=""
          className="h-44"
        />
      </div>
      <div className="button flex justify-around items-center py-4">
        <button className="border-black  border px-2 py-1 text-xs">
          Share Fluffy
        </button>
        <button className="bg-blue-500 text-white px-2 py-1 text-xs">
          Adopt Fluffy
        </button>
      </div>
    </div>
  );
}

export default PetProfile
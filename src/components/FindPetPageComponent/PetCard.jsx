// import React from 'react'
import DogImage from "../../assets/PetImage/lovely-dog-posing-garden_23-2147997370.avif";
const PetCard = () => {
  return (
    <div className="Card flex flex-col items-center justify-around bg-white w-[25vw] h-[50vh] p-4 shadow-md shadow-black border-b-4 border-blue-500">
      <div className="wrapper-top flex p-2 gap-2 ">
        <div className="PetImage h-44 w-44 border-b-4 border-blue-500 overflow-hidden duration-300">
          <img
            src={DogImage}
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div className="Petdetail flex flex-col gap-4">
          <div className="">
            <h1 className="font-bold text-2xl">Jimmy</h1>
          </div>
          <div className="flex border-b-2 border-dotted">
            <h2>Gender:</h2>
            <p>Male</p>
          </div>
          <div className="flex border-b-2 border-dotted">
            <h2>Age:</h2>
            <p>3 years</p>
          </div>
          <div className="flex border-b-2 border-dotted  ">
            <h2>Breed:</h2>
            <p>Golden Retiver</p>
          </div>
        </div>
      </div>
      <div className="wrapper bottom"></div>
      <div className="btn">
        <button className="">Adopt Me</button>
      </div>
    </div>
  );
};

export default PetCard;

/* eslint-disable react/prop-types */
import { FaShieldDog } from "react-icons/fa6";

export const LogoLoader = () => {
  return (
    <div className="h-screen flex items-center justify-center w-full flex-col">
      <span className="  border-4 border-blue-500 rounded-full p-2 animate-bounce">
        <FaShieldDog size={50} className="text-blue-500" />
      </span>
      {/* <div className=" border-blue-500 h-16 w-16 rounded-full  border-dashed shadow-slate-950 animate-spin shadow-md  "></div> */}
      <p className="animate-pulse">Loading...</p>
    </div>
  );
};

export const LodingState = () => {
  return (
    <div className="h-4 w-4 border-4 border-white rounded-full animate-spin border-dashed"></div>
  )
}

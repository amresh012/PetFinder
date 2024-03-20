import { FaPaw } from "react-icons/fa";
import PetList from "./PetList";

const FeatuedPet = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12  bg-zinc-100  h-auto">
      <div className="heading flex flex-col  items-center justify-center">
        <div className="title flex items-center  justify-center gap-2">
          <div className="h-[3px] w-12 bg-blue-500 animate-pulse"></div>
          <h1 className=" m-4  uppercase">YOUR Furry FRIENDS</h1>
          <div className="h-[3px] w-12 bg-blue-500 animate-pulse"></div>
        </div>
        <h1 className="text-5xl  font-semibold ">
          Featured <span className="text-blue-500 font-extrabold">Pets</span>
        </h1>
        <div className="icon flex gap-2 text-blue-600  opacity-75 animate-bounce  p-2">
          <FaPaw size={40} />
        </div>
      </div>
      <div className="PetList  h-max w-full my-9 overflow-hidden p-4 ">
        <PetList />
      </div>
    </div>
  );
};

export default FeatuedPet;

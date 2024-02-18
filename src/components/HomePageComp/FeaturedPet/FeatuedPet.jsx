import PetList from "./PetList";

const FeatuedPet = () => {
  return (
    <div className="flex flex-col bg-slate-950 items-center justify-center py-12 gap-12  h-auto">
      <div className=" text-[9rem] absolute left-0 ">
        <h1 className="text-white opacity-10 sm:hidden font-extrabold">
          We ❣️ Our 🐶 Pets
        </h1>
      </div>
      <h1 className="text-5xl text-white font-semibold ">
        Featured <span className="text-blue-500 font-extrabold">Pets</span>
      </h1>
      <div className="PetList  h-max w-full my-9 overflow-hidden p-4 ">
        <PetList />
      </div>
    </div>
  );
};

export default FeatuedPet;

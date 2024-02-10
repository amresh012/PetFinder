import "./Hero.css";
const Hero = () => {
  return (
    <div
      className="Hero_section
     h-auto lg:h-[90vh] flex  items-center justify-around p-2 "
    >
      <div className="right_section w-full lg:w-1/2 h-auto flex items-center flex-col">
        <span className="text-white text-xl font-medium">
          Welcome to{" "}
          <span className=" lg:text-2xl text-blue-500">PetAdopt</span>
        </span>
        <h1 className=" text-white text-6xl lg:text-[4vmax] lg:w-full text-center p-4">
          Your Trusted Companion in{" "}
          <span className="text-blue-500 font-extrabold">Pet Adoption</span>
        </h1>
        <p className="para px-12 py-4 text-white text-center  ">
          PetFinder is your ultimate destination for finding the perfect furry
          friend to join your family. Whether you &apos;re a seasoned pet owner
          or a first-time adopter, we &apos; re here to guide you every step of
          the way.
        </p>
        <button
          className="action border-2 p-4 border-blue-500
         text-blue-500 bg-slate-900 hover:text-white
          hover:bg-blue-500 font-bold shadow-md rounded-md hover:ring-offset-[-10px]"
        >
          Browse Available Pets
        </button>
      </div>
    </div>
  );
};

export default Hero;

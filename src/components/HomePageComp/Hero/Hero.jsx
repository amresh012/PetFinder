// import Img1 from "../../../assets/PetImage/cute-beagle.avif";
// import Img2 from "../../../assets/PetImage/lovely-brown-domestic-cat-green-garden-cute-animal-background-concept_1150-6456.avif";
// import Img3 from "../../../assets/PetImage/lovely-dog-posing-garden_23-2147997370.avif";
// import Img4 from "../../../assets/PetImage/curly-coated-retriever.avif";
// import Img5 from "../../../assets/PetImage/vertical-closeup-shot-cute-golden-retriever-looking-right-sunny-day_181624-2963.avif";
// import Img6 from "../../../assets/PetImage/white-himalayan-dog-resting-natural-environment_181624-30735.avif";
import Form from "../Form/Form";
import "./Hero.css";
const Hero = () => {
  return (
    <div
      className="Hero_section
     h-auto  flex flex-col lg:flex-row  items-center gap-4 justify-between p-2 "
    >
      <div className="right_section w-full lg:w-1/2 h-auto flex items-center flex-col text-white">
        <span className=" text-xl font-medium ">
          Welcome to{" "}
          <span className=" lg:text-2xl text-blue-500">PetAdopt</span>
        </span>
        <h1 className="  text-6xl lg:text-[4vmax] lg:w-full text-center p-4">
          Your Trusted Companion in{" "}
          <span className="text-blue-500 font-extrabold ">Pet Adoption</span>
        </h1>
        <p className="para px-12 py-4  text-center text-white ">
          PetAdopt is your ultimate destination for finding the perfect furry
          friend to join your family. Whether you &apos;re a seasoned pet owner
          or a first-time adopter, we &apos;re here to guide you every step of
          the way.
        </p>
        <button
          className="action border px-8 py-2 border-blue-500
         text-blue-500  hover:text-white
          hover:bg-blue-500 font-bold rounded-md"
        >
          Discover More
        </button>
      </div>
      <div className="left_section w-full lg:w-[50vw]  grid  place-items-center my-4 px-8 ">
        <Form />
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="flex flex-wrap gap-12 lg:gap-2">
          <img src={Img1} alt="" className="box" loading="lazy"/>
          <img src={Img2} alt="" className="box" loading="lazy" />
          <img src={Img6} alt="" className="box" loading="lazy" />
          <img src={Img3} alt="" className="box" loading="lazy" />
          <img src={Img5} alt="" className="box" loading="lazy" />
          <img src={Img4} alt="" className="box"  loading="lazy"/>
        </div> */
}

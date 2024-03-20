import { FaPaw, FaPhone } from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import { services } from "../../../Data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="main-container flex flex-col gap-12 items-center justify-around mt-12">
      <div className="heading flex flex-col gap-4 items-center justify-center">
        <div className="title flex items-center  justify-center gap-2">
          <div className="h-[3px] w-12 bg-blue-500 animate-pulse"></div>
          <h1 className="text-blue-500  uppercase">What We Offer</h1>
          <div className="h-[3px] w-12 bg-blue-500 animate-pulse"></div>
        </div>
        <h1 className=" uppercase text-center text-[4vmax] font-bold">
          Our Services
        </h1>
        <div className="icon flex gap-2  opacity-25 animate-bounce">
          <FaPaw size={40} />
          <FaPaw size={50} />
        </div>
      </div>
      {/* midle content */}
      <div
        className="middle-content flex flex-col lg:flex-row  items-center justify-center"
        data-aos="zoom-out"
        // data-aos-once="true"
      >
        <div className="left-content w-full px-4 lg:w-1/2 flex flex-col gap-2">
          <h1 className="text-[6vmax] font-bold">Quality Services</h1>
          <p className="text-zinc-500 text-2xl font-medium">
            We offer quick & easy services for cats and dogs, accumsan felis id,
            fermentum purus. Quisque vitae hendrerit elit.
          </p>
          <p className="font-medium">
            Aliquam erat volutpat In id fermentum augue, ut pellentesque leo.
            Maecenas at arcu risus. Donec commodo sodales ex, scelerisque
            laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus.
            Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
          </p>
          <div className="button flex items-center justify-center gap-4 mt-9 bg-blue-500 w-fit rounded-full px-6 py-2 hover:bg-white hover:text-blue-500 text-white border-2 hover:border-blue-500 duration-100 cursor-pointer shadow-md shadow-gray-100">
            <button className="text-xl font-thin">Contact Us</button>
            <FaPhone />
          </div>
        </div>
        <div
          className="right-content"
          data-aos="zoom-in"
          // data-aos-once="true"
        >
          <img
            src="/public/PetImage/images-removebg-preview.png"
            alt="Cat-png"
            className="h-[400px]"
          />
        </div>
      </div>
      {/*  end of middle content */}
      {/* feature card here */}
      <div className="card-container flex flex-wrap  items-center justify-center gap-4 m-4">
        {services.map((item) => {
          return (
            <FeatureCard
              key={item.id}
              name={item.name}
              description={item.description}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;

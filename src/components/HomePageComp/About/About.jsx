import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" about w-full grid place-items-center p-12 " id="about">
      <div className="title flex items-center  justify-center gap-2 mb-12">
        <div className="h-[1px] w-14 bg-blue-500 "></div>
        <h1 className="text-blue-500  uppercase">Get to know Us</h1>
        <div className="h-[1px] w-14 bg-blue-500"></div>
      </div>
      <div className=" tab-button space-x-6 w-full rotate-[-2deg] flex items-start justify-start ">
        <button
          className="bg-blue-600 p-4 text-white font-bold text-xl active:animate-bounce"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          OUR MISSION
        </button>
        <button
          className=" bg-fuchsia-600 p-4 text-white font-bold text-xl active:animate-ping"
          data-aos="fade-up"
          data-aos-duration="1000"
          // data-aos-once="true"
        >
          OUR EVENTS
        </button>
        <button
          className="bg-blue-600 p-4 text-white font-bold text-xl active:animate-pulse"
          data-aos="fade-up"
          data-aos-duration="1000"
          // data-aos-once="true"
        >
          TESTMONIAL
        </button>
      </div>
      <div className="wrapper flex  items-center justify-between w-full  p-12 bg-white shadow-md shadow-zinc-500 rotate-[-2deg] ">
        <div className="left_content w-full lg:w-1/2 flex flex-col  items-start justify-around gap-12 p-10">
          <div className="title flex items-center  justify-center gap-2">
            <div className="h-1 w-12 bg-blue-500 animate-pulse"></div>
            <h1 className="text-blue-500 text-xl">About Us</h1>
            <div className="h-1 w-12 bg-blue-500 animate-pulse"></div>
          </div>
          <div className="content flex flex-col p-2 ">
            <h1 className="text-4xl  text-blue-500 font-bold">
              Our Main Goal Is To Protect Animals
            </h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
              quisquam expedita fugit dolor aliquam possimus quod totam maxime
              quidem. Rem, nobis impedit! Libero harum impedit voluptates
              blanditiis? Facilis, nemo odit. Animi velit rem odit ullam
              possimus ut provident aliquid non exercitationem, ad omnis enim
              quam officiis illo nihil porro, fuga sit totam dicta est esse
              dolore ratione. Excepturi, a cumque.
            </p>
          </div>
          <div className="button flex text-white items-center gap-4 rounded-md  bg-blue-500 p-2 rotate-[-2deg] active:scale-95 cursor-pointer">
            <button className="py-2 px-6">Know More us</button>
            <FaArrowRight className=" animate-pulse" />
          </div>
        </div>
        <div
          className="right_content w-[50vw] hidden lg:block rounded-lg bg-slate-700 overflow-hidden"
          data-aos="fade-up"
        >
          <img
            src="/public/portrait-couple-with-small-pet.jpg"
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;

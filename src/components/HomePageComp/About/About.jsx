import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../CommanComponent/Button";

const About = () => {
  // const [currenttab, setCurrentTab] = useState(<About />);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" about lg:w-full  grid place-items-center " id="about">
      <div className="title flex items-center  justify-center  mb-12">
        <div className="h-[1px] w-14 bg-blue-500 "></div>
        <h1 className="text-blue-500  uppercase">Get to know Us</h1>
        <div className="h-[1px] w-14 bg-blue-500"></div>
      </div>
      <div className="flex tab-button space-x-2 lg:space-x-6 w-full px-2 lg:rotate-[-2deg]  items-start justify-start ">
        <Button
          text="ABOUT US"
          isActive={true}
          className="bg-blue-500 text-xl p-4 text-white hover:animate-pulse"
        />
        <Button
          text="OUR EVENT"
          isActive={true}
          className="bg-fuchsia-600 text-xl p-4 text-white"
        />
        <Button
          text="OUR MISSION"
          isActive={true}
          className="bg-blue-500 text-xl p-4 text-white"
        />
      </div>
      <div className="wrapper flex flex-col lg:flex-row  items-center justify-between  w-full lg:p-12 bg-white lg:shadow-md shadow-zinc-500 lg:rotate-[-2deg] ">
        <div className="left_content w-full lg:w-1/2 flex flex-col  lg:items-start justify-around gap-12 p-4">
          <div className="title text-center flex items-center  justify-center gap-4">
            <div className="h-1 w-12 bg-blue-500 animate-pulse"></div>
            <h1 className="text-blue-500 text-xl">About Us</h1>
            <div className="h-1 w-12 bg-blue-500 animate-pulse"></div>
          </div>
          <div className="content flex flex-col lg:p-2 gap-2 ">
            <h1 className="text-xl lg:text-4xl  text-blue-500 font-bold">
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
          <Button
            text="Know More"
            isActive={true}
            className="bg-blue-500  tracking-wide px-6 py-2 text-white flex  items-center gap-2 rounded-md"
            icon={<FaArrowRight />}
          />
        </div>
        <div
          className="right_content w-full lg:w-[50vw]  lg:block rounded-lg bg-slate-300 overflow-hidden p-4 "
          data-aos="fade-up"
        >
          <img
            src="/public/PetImage/father-taking-pictures-mother-son-with-dog-park.jpg"
            alt=""
            loading="lazy"
            className="hover:animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

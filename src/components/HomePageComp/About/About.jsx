import { FaArrowRight } from "react-icons/fa";
const About = () => {
  return (
    <div className=" about w-full grid place-items-center p-12">
      <div className="wrapper flex items-center justify-between w-full  p-12">
        <div className="left_content w-1/2 flex flex-col  items-start justify-around gap-12 p-10">
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
          <div className="button flex text-white items-center gap-4 rounded-md  bg-blue-400 p-2">
            <button className="">Know More us</button>
            <FaArrowRight />
          </div>
        </div>
        <div className="right_content w-[50vw] rounded-lg overflow-hidden">
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

import { FaPaw } from "react-icons/fa";
import BlogCard from "./BlogCard";
import { testimonials } from "../../../Data";
import Slider from "../../CommanComponent/Slider/Slider";
const Blog = () => {
  return (
    <div
      id="Blog"
      className="Blog  flex flex-col justify-center items-center gap-4  px-24 "
    >
      <div className="heading flex flex-col  items-center justify-center">
        <div className="title flex items-center  justify-center gap-2">
          <div className="h-[3px] w-12 bg-blue-500 animate-pulse"></div>
          <h1 className=" m-4  uppercase">FIND YOUR FRIEND</h1>
          <div className="h-[3px] w-12 bg-blue-500 animate-pulse"></div>
        </div>
        <h1 className=" uppercase text-blue-500 text-center text-[5vmax] font-extrabold tracking-wider">
          Testemonial
        </h1>
        <div className="icon flex gap-2 text-blue-600  opacity-75 animate-bounce  p-2">
          <FaPaw size={40} />
        </div>
      </div>
      <Slider>
        {testimonials.map((item, index) => (
         <BlogCard key={index} item={item} index={index} ></BlogCard>
       ))}
      </Slider>
    </div>
  );
};

export default Blog;

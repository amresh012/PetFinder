import { BlogList } from "../../Data";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className="BlogCard flex flex-wrap lg:flex-nowrap items-center gap-4 justify-around">
      {BlogList.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-center bg-slate-700 justify-center hover:translate-y-[-4px] duration-300 cursor-pointer lg:w-1/2  rounded-lg overflow-hidden"
          >
            <div className=" h-[200px]  w-full overflow-hidden ">
              <img src={item.url} alt={item.title} className=" h-full w-full" />
            </div>
            <div className="detail text-white items-center flex-col  flex justify-center">
              <h1 className="text-2xl font-bold text-center">{item.title}</h1>
              <p className="p-2 text-center ">{item.desc}</p>
            </div>
            <div className=" bg-blue-500 flex  items-center justify-center m-4 rounded-lg gap-4 p-2">
              <button className="text-white">Read More</button>
              <FaArrowRight className="text-white" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;

import BlogCard from "./BlogCard";
const Blog = () => {
  return (
    <div
      id="Blog"
      className="Blog bg-slate-950 flex flex-col justify-start items-start gap-4  px-24 "
    >
      <h1 className=" text-[15vmax] lg:text-[8rem] font-extrabold   text-blue-500">
        Blogs
      </h1>
      <div className="text-white text-2xl">
        Read in our Blogs what people are saying about our work.
      </div>
      <BlogCard />
    </div>
  );
};

export default Blog;

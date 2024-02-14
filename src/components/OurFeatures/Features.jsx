import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className=" bg-slate-950  flex flex-col  items-center justify-around">
      <h1 className=" text-[10vmax] lg:text-6xl text-white font-bold mb-12 ">
        Value We Provide
      </h1>
      <div className="card-container flex h-full">
        <FeatureCard />
      </div>
    </div>
  );
};

export default Features;

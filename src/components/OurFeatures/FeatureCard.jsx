import { Features } from "../../Data";
import { FaArrowRight } from "react-icons/fa";
const FeatureCard = () => {
  return (
    <div className="flex  flex-wrap items-center justify-evenly">
      {Features.map((item) => {
        return (
          <div
            key={item.id}
            className="card w-[300px] lg:w-1/4 m-2 flex  flex-wrap flex-col items-center justify-around  bg-slate-800 rounded-md"
          >
            <div className="imge m-2 rounded-lg p-2 bg-white">
              <img src={item.icon} alt="image" className="h-44 w-44" />
            </div>
            <div className="detail flex flex-col items-center justify-center">
              <h3 className="text-2xl text-blue-500 font-bold">{item.title}</h3>
              <p className="p-4 text-center text-white">
                {item.Decs.slice(0, 100)}
              </p>
            </div>
            <div className="button flex items-center justify-center gap-4 text-blue-500 underline">
              <a href="">Know More </a>
              <FaArrowRight />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCard;

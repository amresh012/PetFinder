import { Features } from "../../Data";
import { FaArrowRight } from "react-icons/fa";
const FeatureCard = () => {
  return (
    <div className="flex  flex-wrap items-center justify-evenly">
      {Features.map((item) => {
        return (
          <div
            key={item.id}
            className="card w-1/3 sm:w-1/3 m-2 gap-4 flex lg:flex-row sm:flex-col   items-center justify-around  bg-slate-800 rounded-md"
          >
            <div className="imge m-2 rounded-lg p-2 bg-white h-full w-full">
              <img src={item.icon} alt="image" className="" />
            </div>
            <div className="detail p-2 flex flex-col items-center justify-center">
              <h3 className="text-2xl text-blue-500 font-bold text-center">{item.title}</h3>
              <p className="p-4 text-center text-white">
                {item.Decs.slice(0, 100)}
              </p>
              <div className="button flex items-center justify-center gap-4 text-blue-500 underline">
                <a href="">Know More </a>
                <FaArrowRight />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCard;

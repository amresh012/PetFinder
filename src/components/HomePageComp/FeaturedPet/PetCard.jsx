// import { Link } from "react-router-dom";
import { PetDetail } from "../../../Data";

const PetCard = () => {
  return (
    <div className="card-wrapper flex flex-wrap  items-center  justify-center">
      {PetDetail.map((item) => {
        return (
          <div
            key={item.id}
            className="card bg-white p-4 rounded-md flex flex-wrap gap-2  m-2 flex-col w-fit "
          >
            <div className=" flex items-center justify-around gap-4">
              <div className="">
                <img
                  src={item.url}
                  alt="PetImage"
                  className=" object-cover h-44 w-44 hover:scale-105 duration-150 "
                  loading="lazy"
                />
              </div>
              <div className="detail">
                <h1 className="title text-4xl font-bold text-blue-500">
                  {item.name}
                </h1>
                {/* <p className="Fav  font-medium">{item.favoraite}</p> */}
                <div className="flex flex-col">
                  <span className="font-medium">
                    Adopted by{" "}
                    <span className="font-bold italic">
                      {item.ownerName.slice(0, 20).trim()}
                    </span>
                  </span>
                  <span className="">
                    Age: <span>{item.age}</span>
                  </span>
                </div>
                <div className="">
                  <p className="">{item.location}</p>
                  <span>{item.Availiable == true}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PetCard;

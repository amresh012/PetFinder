import { PetDetail } from "../../Data";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { faker } from "@faker-js/faker";

const PetCard = () => {
  return (
    <div className="card-wrapper flex flex-wrap  gap-4 md:flex-grow-1 p-2  items-center  justify-center">
      {PetDetail.map((item) => {
        return (
          <div
            key={item.id}
            className="card  bg-slate-800 p-4  rounded-md w-96 overflow-hidden hover:scale-105 duration-150"
          >
            <div className="image rounded-tr-2xl rounded-bl-2xl overflow-hidden p-2  h-1/2 w-full ">
              <img
                src={faker.image.animals(600, 350)}
                alt="PetImage"
                className=" object-cover rounded-tr-2xl rounded-bl-2xl w-full h-full hover:scale-105 duration-150 "
              />
            </div>
            <div className="detail flex flex-col gap-6 justify-start items-center">
              <h1 className="title text-4xl font-bold text-blue-500">
                {item.name}
              </h1>
              <p className="Fav text-gray-100 font-medium">{item.favoraite}</p>
              <div className="flex gap-4 w-full justify-around items-center">
                <span className="font-medium text-white">
                  Owner{" "}
                  <span className="font-bold italic">
                    {item.ownerName.slice(0, 20).trim()}
                  </span>
                </span>
                <span className="text-white">
                  Age: <span>{item.age}</span>
                </span>
              </div>
              <div className="text-white">
                <p className="">{item.location}</p>
                <span>{item.Availiable == true}</span>
              </div>
            </div>
            <div className="button bg-slate-950 text-white flex justify-end gap-20 m-4 cursor-pointer  items-center  rounded-full">
              <h1>Click To Adopt</h1>
              <FaArrowAltCircleRight size={50} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PetCard;

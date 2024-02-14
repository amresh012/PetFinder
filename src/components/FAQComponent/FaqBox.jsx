import { FaChevronDown } from "react-icons/fa";
import { FaqList } from "../../Data";
// import {forwardRef} from 'react'
const FaqBox = () => {
  return (
    <div className="wrapper h-1/4  p-12 flex flex-col w-[70vw] items-center rounde-md justify-around bg-slate-900  ">
      {FaqList.map((item) => {
        return (
          <div
            key={item.id}
            className="card flex flex-col items-center justify-center m-2 w-full  bg-white  "
          >
            <div className="flex items-center justify-around gap-12 w-full  border-2 p-4">
              <p className="title text-xl">{item.title}</p>
              <span>
                <FaChevronDown />
              </span>
            </div>
            <div className="content h-auto hidden   border-2  text-white p-2 ">
              <p className="decs fomt-medium" id="text">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqBox;

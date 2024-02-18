import { FaChevronDown } from "react-icons/fa";
import { faqContent } from "../../../Data";
// import {forwardRef} from 'react'
const FaqBox = () => {
  return (
    <div className="wrapper h-1/4  p-12 flex flex-col w-full items-center rounde-md justify-around  ">
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <h1 className="text-6xl font-bold text-blue-500 pt-12">
          Frequently Asked Questions (FAQ)
        </h1>

        <p className="tex-medium text-white  text-xl">
          Have a dought? find here in faq
        </p>
      </div>
      {faqContent.map((item) => {
        return (
          <div
            key={item.id}
            className="card flex flex-col items-center justify-center m-2 w-full  bg-white  "
          >
            <div className="flex items-center justify-between gap-12 w-full  border-2 p-4">
              <p className="title text-xl text-black">{item.question}</p>
              <span>
                <FaChevronDown />
              </span>
            </div>
            <div className="content h-auto hidden   border-2  text-white p-2 ">
              <p className="decs fomt-medium" id="text">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqBox;

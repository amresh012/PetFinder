import { FaChevronDown } from "react-icons/fa";
import { faqContent } from "../../../Data";
// import {forwardRef} from 'react'
import "./Faq.css";
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
            className="card flex flex-col items-center justify-center "
          >
            <div className="flex items-center justify-between  w-full  border p-4 rounded-md">
              <p className="title text-xl text-black">{item.question}</p>
              <span>
                <FaChevronDown />
              </span>
            </div>
            <div className="content h-auto bg-gray-100 rounded-b-md  p-4 ">
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

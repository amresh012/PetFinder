import { FaChevronDown } from "react-icons/fa";
import { ExploreLink } from "../../../Data";
import "./Dropdown.css";
export const Dropdown = () => {
  return (
    <div className="dropdown relative ">
      <div className="dropdown-toggle flex items-center gap-2 ">
        <h1 className="text-primary">Explore</h1>
        <FaChevronDown />
      </div>
      <div className="dropdown-content border-b-4 border-blue-500 w-full top-8  p-2 bg-white   absolute duration-700">
        <ul className="flex flex-col gap-2 w-[250px] ">
          {ExploreLink.map((item) => (
            <li
              key={item.id}
              className="hover:bg-gray-300 flex  items-center gap-2 capitalize p-2 text-black relative"
            >
              <img src={item.icon} alt="" className="h-10 w-10" />
              <a href={item.Link}>{item.Link}</a>
              {item.Link == "Donate" && (
                <span className="bg-green-400 text-white text-xs p-1 rounded-md">
                  New
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

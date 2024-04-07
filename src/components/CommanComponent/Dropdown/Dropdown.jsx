import { FaChevronDown } from "react-icons/fa";
import { ExploreLink } from "../../../Data";
import "./Dropdown.css";
export const Dropdown = () => {
  return (
    <div className="dropdown relative">
      <div className="dropdown-toggle flex items-center gap-2">
        <h1 className="text-primary">Explore</h1>
        <FaChevronDown />
      </div>
      <div className="dropdown-content bg-white/90 backdrop-blur-md w-auto top-8 p-2 rounded-md py-2 z-10  absolute shadow-md shadow-black/20">
        <ul className="flex flex-col gap-2 w-[250px] ">
          {ExploreLink.map((item) => (
            <li
              key={item.id}
              className="hover:bg-gray-300 flex rounded-md  items-center gap-2 capitalize p-2 text-black"
            >
              <img src={item.icon} alt="" className="h-10 w-10" />
              <a href={item.Link}>{item.Link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import { FaShieldDog } from "react-icons/fa6";
import { Navlinks } from "../../../Data";
import { Chip } from "@mui/material";
import { FaMoon, FaSun } from "react-icons/fa";
import { Dropdown } from "../Dropdown/Dropdown";

const Navbar = () => {
  var theme = 1;
  return (
    <nav className="flex justify-around items-center bg-white/20 backdrop-blur-md   w-full">
      <div className="logo flex items-center justify-center gap-2 p-4">
        <span className="  border-4 border-blue-500 rounded-full p-2">
          <FaShieldDog size={30} className="text-blue-500" />
        </span>
        <Link to="/">
          <h1 className="font-extrabold text-blue-500 capitalize text-2xl">
            PetAdopt.
          </h1>
        </Link>
      </div>
      {/* Navlink */}
      <ul className="Navlink items-center gap-4 hidden md:hiddden lg:flex">
        {Navlinks.map((link) => {
          return (
            <li
              className="hover:text-white hover:bg-blue-500  p-2 duration-300 rounded-md  font-medium capitalize"
              key={link.label}
            >
              <a className="active:text-blue-500" href={link.href}>
                {link.label === "Explore" ? <Dropdown /> : link.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="Searchbar flex items-center justify-between gap-4">
        <Link to="/auth/SignUp" className=" ">
          <div
            className="login-btn border bg-blue-500 text-white hover:bg-blue-400 duration-300
          px-6 py-2 rounded-md active:scale-95 font-medium"
          >
            SignUp
          </div>
        </Link>
        {/* Menu  for mobile view */}
        <div className="hidden lg:block">
          <Chip
            label={theme ? "Dark" : "Light"}
            icon={theme ? <FaSun /> : <FaMoon />}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

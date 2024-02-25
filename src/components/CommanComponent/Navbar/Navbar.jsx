import { Link } from "react-router-dom";
import { FaShieldDog } from "react-icons/fa6";
import { Navlinks } from "../../../Data";
import Search from "../../SearchPopup/Search";
import LoginPage from "../../../Pages/Authentication/LoginPage";
import { Chip } from "@mui/material";
import { FaSun } from "react-icons/fa";

const Navbar = () => {
  var theme = true;
  return (
    <nav className="flex justify-around items-center   w-full">
      <div className="logo flex items-center justify-center gap-2 p-4">
        <span className=" bg-white border-4 border-blue-500 rounded-full p-2">
          <FaShieldDog size={30} className="text-blue-500" />
        </span>
        <Link to="/">
          <h1 className="font-extrabold text-blue-500 capitalize text-2xl">
            PetAdopt.
          </h1>
        </Link>
      </div>
      {/* Navlink */}
      <ul className="Navlink items-center gap-12 hidden md:hiddden lg:flex">
        {Navlinks.map((link) => {
          return (
            <li
              className="hover:text-blue-500  font-medium capitalize"
              key={link.label}
            >
              <a className="active:text-blue-500" href={link.href}>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="Searchbar flex items-center justify-between gap-4">
        <Search />
        <div className="">
          <LoginPage />
        </div>
        <div className="hidden lg:block">
          <Chip
            label={theme ? "Dark" : "Light"}
            icon={<FaSun />}
            onClick={() => {
              document.body.classList.toggle("light");
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

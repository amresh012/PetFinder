import { Link } from "react-router-dom";
import { FaShieldDog } from "react-icons/fa6";
import { Navlinks } from "../../Data";
import Search from "../SearchPopup/Search";
import LoginPage from "../../Pages/Authentication/LoginPage";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center bg-slate-950  w-full fixed rounded-b-[50px]">
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
              className="hover:text-blue-500 text-white font-medium capitalize"
              key={link.label}
            >
              <a className="active:text-blue-500" href={link.href}>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="Searchbar flex items-center justify-between gap-8">
        <Search />
        <div className="">
          <LoginPage />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaShieldDog } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

const Footer = () => {

  // const notify = (text = "") =>
  //   toast(text, {
  //     position: "top-right",
  //     autoClose: 2000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //   });
 

  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer bg-slate-950 flex flex-col items-center gap-12 justify-center pt-24">
      {/* <ToastContainer /> */}
      <div className="Newsletter flex flex-col w-full lg:w-1/2 items-center  justify-center gap-4  ">
        <h1 className="text-white lg:text-2xl">Subscribe to our Newsletter</h1>
        <div className="  flex  items-center justify-center rounded-l-full w-1/2  ">
          <input
            type="email"
            placeholder="Your Email Address"
            required
            className="h-max w-full p-2  rounded-l-full outline-none "
          ></input>
          <button
            className="text-white bg-blue-500  font-bold p-2 rounded-r-full  active:scale-95 relative"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="wrapper flex flex-col lg:flex-row justify-start items-start lg:justify-center lg:items-center w-full">
        <div className="left-content_footer flex lg:w-1/2  flex-col lg:items-center lg:justify-center">
          <div className="logo flex lg:items-center lg:justify-center  gap-2 lg:p-4 py-2">
            <span className=" bg-white border-4 border-blue-500 rounded-full p-2">
              <FaShieldDog size={30} className="text-blue-500" />
            </span>
            <Link to="/">
              <h1 className="font-extrabold text-blue-500 capitalize text-2xl">
                PetAdopt.
              </h1>
            </Link>
          </div>

          <div className="addr h-fit flex items-center justify-center  lg:p-4">
            <address className="text-white ">
              <span className="">+00-29839-4058</span>
              <p className="">II Floor West Street </p>
              <span className="">ManHatten Building,New York</span>
            </address>
          </div>
        </div>

        <div className="right-content_footer flex flex-col lg:flex-row lg:justify-around lg:items-center gap-2 w-full">
          <div className=" flex flex-col text-white">
            <h1 className="text-2xl">Quick Link 1</h1>
            <ul className="nav-link">
              <li className="">About</li>
              <li className="">Blog</li>
              <li className="">Contact</li>
              <li className="">Carrer</li>
              <li className="">Link-4</li>
            </ul>
          </div>
          {/*  */}
          <div className=" flex flex-col text-white">
            <h1 className="text-2xl">Quick Link 1</h1>
            <ul className="nav-link">
              <li className="">About</li>
              <li className="">Blog</li>
              <li className="">Contact</li>
              <li className="">Carrer</li>
              <li className="">Link-4</li>
            </ul>
          </div>
          {/*  */}
          <div className=" flex flex-col text-white">
            <h1 className="text-2xl">Quick Link 1</h1>
            <ul className="nav-link">
              <li className="">About</li>
              <li className="">Blog</li>
              <li className="">Contact</li>
              <li className="">Carrer</li>
              <li className="">Link-4</li>
            </ul>
          </div>
          {/*  */}
          <div className=" flex flex-col text-white">
            <h1 className="text-2xl">Quick Link 1</h1>
            <ul className="nav-link">
              <li className="">About</li>
              <li className="">Blog</li>
              <li className="">Contact</li>
              <li className="">Carrer</li>
              <li className="">Link-4</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright  flex flex-col items-center justify-center">
        <p className="text-white">
          All Rights Reserved ©️ PetAdopt{" "}
          <span className="text-blue-500">{year}</span>
        </p>
        <div className="icon bg-white/20 gap-4 backdrop-blur-lg cursor-pointer text-blue-500    flex justify-around items-center  p-2 m-4 rounded-md">
          <span className=" mr-2 text-white">follow us on:</span>
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;

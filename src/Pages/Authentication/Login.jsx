import { useState } from "react";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorMessage from "../../Util/Error";
import img from "../../../public/PetImage/cute-beagle.avif";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [role, setRole] = useState("role");

  // Submit the login form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }

      // props.onLogin(await response.json());
    } catch (err) {
      console.log(err);
      setErrorMsg(<ErrorMessage ErrorText={`Error ${err}`} color="red-400" />);
    }
  };

  return (
    <div className="container h-[100vh]  w-full flex flex-col p-4 items-center justify-center ">
      {/* <ToastContainer /> */}
      <form
        onSubmit={handleSubmit}
        className="flex  gap-10 w-full  lg:w-[60%] p-4 rounded-md  items-center shadow-md  bg-white/20 backdrop-blur-md  "
      >
        <div className="w-full flex flex-col">
          <h1 className="text-center flex flex-col text-gray-200 text-4xl font-bold p-2">
            Welcome Back !
            <span className="text-xs text-gray-200 font-thin">
              Please Login to access your account
            </span>
          </h1>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="email" className="text-gray-200">
              E-Mail{" "}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-10 border-2 px-2 outline-red-500"
            />
          </div>
          <br />
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="password" className="text-gray-200">
              Password{" "}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-10 border-2 px-2 outline-red-500"
            />
            <div className="">
              <a className="text-red-500">Forgot Password?</a>
            </div>
          </div>
          <br />
          <div className="Field flex flex-col gap-2 ">
            <label className="text-gray-200">
              Role <sup>*</sup>
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="rounded-md h-10 w-full border-2 outline-red-500"
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="Organization">Organization</option>
              <option value="Pet Shelter">Pet Shelter</option>
            </select>
          </div>
          <br />
          <button type="submit" className="bg-blue-500 p-2 text-white ">
            Log In
          </button>
          <br />
          {/* Display any errors that occured during submission */}
          {errorMsg && (
            <ErrorMessage
              ErrorText={errorMsg.msg}
              alertType={errorMsg.alertType}
            />
          )}
          <Link to="/auth/SignUp" className="text-center">
            <p>
              Don&apos;t have an account?{" "}
              <a href="/signup" className="text-blue-800 underline">
                Sign Up
              </a>
            </p>
          </Link>
          <div className="flex items-center justify-center gap-2 border border-blue-500 p-2 mt-2 hover:bg-blue-500 text-white duration-300 cursor-pointer">
            <FcGoogle size={20} />
            <p className="">SignIn with Google</p>
          </div>
        </div>
        <div className="w-full hidden lg:flex items-center justify-center  rounded-md">
          <img src={img} alt="" className=" rounded-md" />
        </div>
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./../../../public/PetImage/cute-beagle.avif";
import ErrorMessage from "../../Util/Error";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(false);

  const handleformSubmit = (e) => {
    e.preventDefault();
    firstName.length < 2 && toast.error("Please enter a Valid firstName!")
    lastName.length < 2 && toast.error("Please enter a valid  lastName!")
    email.indexOf("@") === -1 || email.indexOf(".com") === -1 && toast.error("Please enter a valid Email address!")
    password.length < 6 && toast.error("Password must be 6-12 character long!")
    role === "role"&& toast.error("Please Select Role Type !")
    notify("Account Created  Successfully!")
  };

  const notify = (text) =>
    toast(text, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: 0,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div className="container  flex items-center justify-center h-screen p-4">
      <ToastContainer />
      <form
        onSubmit={handleformSubmit}
        className="flex  w-full lg:w-[60%]  items-center justify-around shadow-md  relative rounded-md p-2 bg-white/20 backdrop-blur-md"
      >
        <fieldset className="flex w-full lg:w-[60%] h-full flex-col gap-2 items-center justify-around">
          <h2 className="text-2xl font-bold p-2 text-gray-200">
            Create Account
          </h2>
          <div className="Field flex flex-col gap-2 w-[80%]">
            <label className="text-gray-200">
              First name <sup className="text-red-500">*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border-2 h-10 px-2 rounded-md"
              required
            />
          </div>
          <div className="Field flex flex-col gap-2 w-[80%]">
            <label className="text-gray-200">Last name</label>
            <input
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border-2 h-10 px-2 rounded-md"
            />
          </div>
          <div className="Field flex flex-col gap-2 w-[80%]">
            <label className="text-gray-200">
              Email address <sup className="text-red-500">*</sup>
            </label>
            <input
              placeholder="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              className="w-full border-2 h-10 px-2 rounded-md"
              required
            />
          </div>
          <div className="Field flex flex-col gap-2 w-[80%]">
            <label className="text-gray-200">
              Password <sup className="text-red-500">*</sup>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 h-10 px-2 rounded-md outline-none"
              required
            />
          </div>
          <div className="Field flex flex-col gap-2 w-[80%]">
            <label className="text-gray-200">
              Role <sup className="text-red-500">*</sup>
            </label>
            <select
              className="rounded-md h-10 w-full border-2"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="Organization">Organization</option>
              <option value="Pet Shelter">Pet Shelter</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-8 py-2 bg-blue-500 text-white  m-2 cursor-pointer rounded-md active:scale-95 hover:bg-blue-400"
          >
            Create account
          </button>
          <div className=" leading-tight  ">
            <p className="">
              Already Have Account ?
              <Link
                to="/auth/login"
                className="text-blue-500 underline py-2 rounded-md mx-1"
              >
                login
              </Link>
            </p>
            <br />
          </div>
          <div className="flex items-center tracking-wider justify-center gap-2 border border-blue-500 px-16 py-2 rounded-md  mx-4 hover:bg-blue-500 hover:text-white duration-300 cursor-pointer">
            <FcGoogle size={20} />
            <p className="">SignIn with Google</p>
          </div>
        </fieldset>
        <div className="hidden lg:block ">
          <img src={img} alt="" className=" rounded-md" loading="lazy" />
        </div>
      </form>
    </div>
  );
}
export default SignUp;

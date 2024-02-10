import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Form = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if (email.value === "" || password.value === "") {
      alert(`feild can't be empty!`);
    } else {
      alert("form Successfully submitted !");
    }
  };
  return (
    <div className="form-container w-96 flex flex-col  items-center justify-center h-auto ">
      <h1 className="text-center font-medium text-blue-500 text-4xl py-4 mt-2">
        Welcome Back !
      </h1>
      <form
        action=""
        className="form flex flex-col items-start justify-around gap-6 w-full h-96 p-4"
        onSubmit={handlesubmit}
      >
        <div className="email flex flex-col w-full bg-slate-500 rounded-md">
          <label
            htmlFor="email"
            className="email font-medium text-white text-2xl p-2  "
          >
            Email
          </label>
          <input
            type="email"
            name=""
            id="email"
            className="border-2 focus:border-blue-500 h-10 rounded-md  px-4 outline-none"
            required
          />
        </div>
        <div className="password flex flex-col gap-2 w-full bg-slate-500 rounded-md ">
          <label
            htmlFor="password"
            className="password text-white p-2 text-2xl font-medium"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="h-10 border-2 rounded-md  focus:border-blue-500 px-4 outline-none"
            required
          />
        </div>
        <div className="button">
          <button
            type="submit"
            className="Login hover:bg-white hover:text-blue-500 rounded-md border-blue-500 border-2 px-10 py-2 font-medium bg-blue-500 text-white"
          >
            Login
          </button>
        </div>
        <Divider orientation="horizontal" width="100%" />
        <div className="link flex items-center justify-center w-full pb-2">
          <Link to="/">
            New To PetAdopt ?{" "}
            <a href="" className="underline text-blue-500">
              Create Account
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;

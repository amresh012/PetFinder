/* eslint-disable no-undef */
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorMessage from "../../Util/Error";
function SignUp() {
  const notify = () =>
    toast("Account Created", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: 0,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const getIsFormValid = () => {
    return (
      firstName.length > 3 &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    notify();
    clearForm();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex  border-2 w-full lg:w-[60%]  items-center justify-around shadow-md bg-black relative rounded-md p-2"
      >
        <fieldset className="flex w-[60%] h-full flex-col gap-4 items-center justify-around">
          <h2 className="text-2xl font-bold p-2 text-white">Create Account</h2>
          <div className="Field flex flex-col gap-2 w-[80%]">
            <label className="text-white">
              First name <sup className="text-red-500">*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
              className="w-full border-2 h-10 px-2 rounded-md"
              required
            />
          </div>
          <div className="Field flex flex-col gap-2 w-[80%]">
            <label className="text-white">Last name</label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
              className="w-full border-2 h-10 px-2 rounded-md"
              required
            />
          </div>
          <div className="Field flex flex-col gap-2 w-[80%]">
            <label className="text-white">
              Email address <sup className="text-red-500">*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
              className="w-full border-2 h-10 px-2 rounded-md"
              required
            />
          </div>
          <div className="Field flex flex-col gap-2 w-[80%]">
            <label className="text-white">
              Password <sup className="text-red-500">*</sup>
            </label>
            <input
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
              className="w-full border-2 h-10 px-2 rounded-md"
              required
            />
            {password.isTouched && password.value.length < 8 ? (
              <ErrorMessage ErrorText="Password Must  be at least 8 characters." />
            ) : null}
          </div>
          <div className="Field flex flex-col gap-2 w-[80%]">
            <label className="text-white">
              Role <sup className="text-red-500">*</sup>
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="rounded-md h-10 w-full border-2"
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">NGO</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={!getIsFormValid()}
            className="px-8 py-2 bg-blue-500 text-white  m-2 cursor-pointer active:scale-95 hover:bg-blue-400"
          >
            Create account
          </button>
          <div className=" leading-tight m-4 text-white">
            <p className="">
              Already Have Account ?
              <Link
                to="/auth/login"
                className="text-blue-500 underline bg-white px-6 py-2 rounded-md mx-1 uppercase"
              >
                login
              </Link>
            </p>
          </div>
        </fieldset>

        <div className="h-full w-1/2  bg-white p-4 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlc_Z5Qn3NtGq51JJWv8U2CPekJOPM7DTcQ&usqp=CAU"
            alt=""
            className="h-full w-full"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;

import { useState } from "react";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorMessage from "../../Util/Error";

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
      setErrorMsg(
        new ErrorMessage(
          "An error occurred while trying to log in. Please try again later."
        )
      );
    }
  };

  return (
    <div className="container h-[100vh] w-full flex flex-col gap-4  items-center justify-center">
      {/* <ToastContainer /> */}
      <form
        onSubmit={handleSubmit}
        className="border-2  gap-2 flex flex-col  justify-around w-1/4 p-2 rounded-md shadow-md"
      >
        <h1 className="text-center text-3xl bg-gray-300 w-full text-blue-500 font-bold p-4">
          Log In
        </h1>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="email">E-Mail: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-10 border-2"
          />
        </div>
        <br />
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-10 border-2"
          />
        </div>
        <br />
        <div className="Field flex flex-col gap-2 ">
          <label>
            Role <sup>*</sup>
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
        <br />
        <button type="submit" className="bg-blue-500 p-2 text-white">
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
      </form>
    </div>
  );
};

export default Login;

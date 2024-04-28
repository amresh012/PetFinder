import { useState } from "react";
import Button from "../components/CommanComponent/Button"
import { ToastContainer, toast } from "react-toastify";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();


    const handleOnclick = (e) => {
      e.preventDefault();
      if (name && email.match(emailRegex)) {
        toast.success("ThankYou ! We will contact you soon.");
      } else {
        email.match(emailRegex)
          ? toast.error("Please fill all fields")
          : toast.error("Invalid Email ID");
      }
    };
  return (
    <div className="overflow-clip">
      <ToastContainer />
      <div className="flex items-center justify-center gap-4 flex-col">
        <h1 className="text-6xl">Get In Touch</h1>
        <input
          type="text"
          placeholder="Enter your message"
          className="w-[25rem] h-10 border rounded-md px-2"
        />
        <Button
          text="Send"
          className="px-6 py-2 bg-blue-500 hover:bg-white hover:border border-blue-500 text-white hover:text-blue-500 rounded-md duration-150"
        />
      </div>

      {/* contact form */}
      <div className="w-full mt-24 flex flex-col  items-center justify-center ">
        <h1 className="text-center text-4xl font-bold ">Contact Form</h1>
        <p className="">Fill out the form below to reach us</p>
        <form
          action=""
          className=" w-full lg:w-1/2 h-full flex items-center  flex-col justify-center gap-4 p-2 "
        >
          <div className="flex items-center justify-start flex-col w-full px-4 ">
            <label htmlFor="name" className="text-left w-full ">
              Name
            </label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-2 h-10 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex items-center justify-start flex-col w-full px-4">
            <label htmlFor="name" className="text-left w-full">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-2 h-10 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex items-center justify-start flex-col w-full px-4">
            <label htmlFor="name" className="text-left w-full ">
              Message
            </label>
            <input
              required
              type="text"
              className="w-full border px-2 h-10 outline-none"
              placeholder="Enter your Message"
            />
          </div>
          <Button
            text="Submit"
            className="bg-blue-500 px-6 py-2 text-white"
            onClick={handleOnclick}
          />
        </form>
      </div>

      {/* chat support */}
      <div className="chat support flex w-full px-44 py-6 justify-around items-center m-4">
        <div className="flex items-center gap-4">
          <div className="bg-zinc-100 p-2 rounded-full">
            <img src="/icons/support.png" alt="" className="h-24" />
          </div>
          <div className="">
            <h1 className="font-bold text-xl">Customer Support</h1>
            <p>Our team is here to assist you</p>
          </div>
        </div>
        <Button
          text="Chat Now"
          className="bg-blue-500 px-6 py-2 text-white"
          onClick={handleOnclick}
        />
      </div>
      {/* map */}
      <div className="grid place-items-center m-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7326602.564779584!2d63.75314782885785!3d26.27974625830621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan%2C%20India!5e0!3m2!1sen!2ssg!4v1712876579354!5m2!1sen!2ssg"
          width="1000"
          height="600"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact
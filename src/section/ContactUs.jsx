import {
  FaTelegramPlane,
  FaBuilding,
  FaPhone,
  FaHandPointRight,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
function ContactUs() {
  return (
    <div className="contact-container bg-slate-950  h-auto ">
      <div className="banner-container ">
        <div className="image-container h-[50vh]  relative ">
          <div className="text-container w-[80%] lg:w-1/3 flex flex-col items-center bg-white/20 backdrop-blur-md p-4 rounded-md  ">
            <h1 className="text-6xl  text-white font-bold">Contact Us</h1>
            <h1 className="text text-center text-xl font-thin  text-white">
              contact us for saving life of speakless Animals they need Our Care
              to live in this world Open for feedback and suggestion.
            </h1>
          </div>
        </div>
      </div>
      {/* contact form  */}
      <div className="cotact-container p-12 flex  items-center justify-between w-full">
        <div className="Add-detail hidden  w-full lg:flex flex-col items-center justify-around gap-12 p-12 cursor-pointer ">
          <div className="Addre flex text-white  items-center w-full gap-12">
            <div className="icon  p-4 rounded-full bg-white/20 backdrop-blur-md">
              <FaBuilding size={20} />
            </div>
            <address>
              <span>+00-29839-4058</span>
              <p>II Floor West Street </p>
              <span>ManHatten Building,New York</span>
            </address>
          </div>
          <div className="mob flex cursor-pointer  items-center w-full gap-12 text-white">
            <div className="icon p-4 rounded-full bg-white/20 backdrop-blur-md">
              <FaPhone />
            </div>
            <div className="phone">
              <p>MOB :+91(2440) 9i92924</p>
              <p>LAND-LINE:+91(2440) 9i92924</p>
              <p></p>
            </div>
          </div>
          <div className="online flex text-white cursor-pointer  items-center w-full gap-8 ">
            <div className="icon  p-4 rounded-full bg-white/20 backdrop-blur-md">
              <FaHandPointRight />
            </div>
            <div className="media flex  w-full gap-8 text-2xl p-4">
              <FaTwitter />
              <FaLinkedin />
              <FaYoutube />
              <FaFacebook />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="form-container shadow-md w-full p-2 ">
          <form className="form flex w-full  flex-col items-center justify-around gap-4 bg-white/20 backdrop-blur-md p-4">
            <p className="text-2xl text-white ">
              Fill this form to contact us.
            </p>
            <div className="name-container flex flex-col w-[80%] gap-2">
              <label htmlFor="text" className="text-white text-xl">
                Name
              </label>
              <input type="text" name="text" className="rounded-lg h-10 " />
            </div>
            <div className="email flex flex-col w-[80%] gap-2">
              <label htmlFor="email" className="text-white text-xl">
                Email
              </label>
              <input type="text" name="text" className="h-10 rounded-lg" />
            </div>
            <div className="textarea flex flex-col w-[80%] gap-2">
              <label htmlFor="textarea" className="text-white text-xl">
                Message
              </label>
              <textarea
                name=""
                className="rounded-lg border-blue-500 outline-none p-2"
                cols="50"
                rows="10"
              ></textarea>
            </div>
            <div className="button flex w-1/2 px-6 py-2 rounded-md hover:text-white items-center justify-center gap-3 m-2 border-blue bg-white/20 backdrop-blur-lg active:scale-95 cursor-pointer">
              <button className="font-bold">Send</button>
              <FaTelegramPlane className="text-blue-500 text-xl" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

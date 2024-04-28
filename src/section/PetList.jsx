/* eslint-disable no-unused-vars */
// import { Skeleton } from "@mui/material";
import { useState } from "react";
import {catBreeds} from '../Data'
import Button from "../components/CommanComponent/Button";
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import Filter from "../components/Filter/Filter";
import { Box, Tabs, Tab, Avatar, Typography, Chip } from '@mui/material'
import { BsThreeDots } from "react-icons/bs";
import { LodingState } from "../components/CommanComponent/Loader";
import PetProfile from "../components/ProflieComponent/PetProfile";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FindPet = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [searchterm, setSearchTerm] = useState("");
  const [isloading , setLoading]=useState(false)

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

  const handlesearchterm = () => {
    if (searchterm === "" || searchterm.length < 2) {
      setLoading(false)
      toast.error("Input feild is  Invalid or Empty");
    }
    else {
      setLoading(true)
    }
  };

  return (
    <div className="flex flex-col gap-8 h-max ">
      <ToastContainer />
      <div className="top-content flex flex-col gap-8 justify-around p-12 items-center">
        <h1 className="text-6xl text-zinc-500 font-semibold  ">
          Find Your Furry Friend
        </h1>
        <div className="search-box flex h-10   rounded-md overflow-clip w-full lg:w-1/2">
          <input
            type="text"
            value={searchterm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Pet By Name or breed"
            className=" px-2 outline-none w-full border"
          />
          <Button
            icon={isloading ? <LodingState /> : <FaSearch />}
            className="flex items-center gap-2 bg-blue-500  px-8 py-2 text-white "
            onClick={handlesearchterm}
          />
        </div>
      </div>
      {/* middle-content */}
      <div className="flex flex-col items-start   justify-around  gap-4 lg:flex-row  lg:p-4 w-full ">
        <div className="filter-box w-full static">
          <Filter />
        </div>
        <div className="pet-card w-full flex flex-col items-center gap-2 justify-center">
          <div className="">
            <Box
              sx={{ borderBottom: 1, borderColor: "dimgray", width: "60vw" }}
            >
              <Tabs
                //  value={props.value}
                //  onChange={props.handleChangeTab}
                variant="scrollable"
                scrollButtons="auto"
                indicatorColor="secondary"
                centered
                allowScrollButtonsMobile
              >
                {/* <Tab label="National Parks" /> */}
                {catBreeds.map((item, index) => {
                  return <Tab key={index} label={item} />;
                })}
              </Tabs>
            </Box>
          </div>
          <div className="flex gap-2 flex-wrap items-center justify-center h-[100vh] w-full overflow-y-scroll">
            {[...Array(12)].map((item, index) => {
              return (
               <PetProfile key={index}/>
              );
            })}
          </div>
        </div>
      </div>
      {/* community post */}
      <div className="post w-full  flex items-center justify-center flex-col gap-2 ">
        <h1 className="text-3xl font-bold text-center capitalize">
          Community post
        </h1>
        <div className="flex flex-col gap-4 border p-2">
          <div className="flex w-full justify-between  items-center gap-1 px-4">
            <div className="flex items-center gap-2">
              <Avatar
                sx={{ width: 32, height: 32 }}
                src="/public/PetImage/father-taking-pictures-mother-son-with-dog-park.jpg"
              />
              <Typography>@Avntika234</Typography>
            </div>
            <BsThreeDots/>
          </div>
          <div className="">
            <img
              src="/public/PetImage/mother-embracing-her-daughter-sitting-near-dog.jpg"
              alt=""
              className="h-[460px] rounded-md"
            />
          </div>
          <div className="px-2 space-y-1">
            <p className="text-xl font-semibold">
              Visited the Shelter today to meet my friend who was just rescude!
            </p>
            <Chip label="#AdoptDontStop" />
          </div>
        </div>
      </div>

      {/* contact-from */}
      <div className="w-full mt-24 flex flex-col gap-12  items-center justify-center ">
        <h1 className="text-center text-4xl font-bold ">Contact Us</h1>
        <form
          action=""
          className=" w-full lg:w-1/2 h-full flex items-center  flex-col justify-center gap-4 p-2 "
        >
          <div className="flex items-center justify-start flex-col w-full px-4 lg:w-1/2">
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
          <div className="flex items-center justify-start flex-col w-full px-4 lg:w-1/2">
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
          <Button
            text="Submit"
            className="bg-blue-500  px-6 py-2 text-white"
            onClick={handleOnclick}
          />
        </form>
      </div>
    </div>
  );
};

export default FindPet;

// https://api.api-ninjas.com/v1/dogs?name=

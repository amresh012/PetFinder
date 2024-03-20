// import React from 'react'
import { catBreeds, cities } from "../../../Data";

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  // const notify = () =>
  //   toast("Wow so easy!", {
  //     position: "top-right",
  //     autoClose: 2000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //   });
  const [suggestionlist, setSuggestionList] = useState([]);
  const [searchquery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [location, setLocation] = useState; ({});

  //Api call for all the dog breeds
  useEffect(() => {
    const fetchdogData = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSuggestionList(Object.keys(data.message));
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error as needed, e.g., set a default list
      }
    };

    fetchdogData();

    // Cleanup function not needed in this case since there are no subscriptions or intervals
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // notify();
  };

  //  Function to filter suggestions based on user input for dog
  const filteredDogSuggestions = suggestionlist.filter((item) =>
    item.toLowerCase().includes(searchquery?.toLowerCase())
  );
  //    Sort the filtered array alphabetically for cat
  const filteredCatSuggestions = catBreeds.filter((item) =>
    item.toLowerCase().includes(searchquery?.toLowerCase())
  );

  return (
    <div className="form-container  bg-white  flex flex-col   items-center justify-start w-full h-[60vh] overflow-y-scroll rounded-md shadow-md  ">
      <div className="bg-transparent p-2 rounded-md">
        <h1 className="text-[4vmin] font-bold py-4 text-blue-500 ">
          Search Based on Your Requirment
        </h1>
      </div>
      <form
        action=""
        className=" flex items-center flex-col flex-wrap justify-center px-12 gap-8 h-auto w-full "
      >
        <div className="flex w-full gap-2">
          {/* category */}
          <div className="Categoryselect flex flex-col w-full gap-2">
            <label
              htmlFor="Category"
              className="font-bold text-gray-900 text-xl"
            >
              Category<span className="text-red-500">*</span>
            </label>
            <select
              name="Category"
              id="Categoryselect"
              className="px-2  rounded-md border-2 h-12 outline-none "
              required
              onChange={(event) => setSelectedCategory(event.target.value)}
              defaultValue={selectedCategory}
            >
              <option value="Select">Select</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
          </div>

          {/* breed */}
          <div className="breedselect flex flex-col justify-around w-full  gap-2">
            <label
              htmlFor="breedSelect"
              className="font-bold text-gray-900 text-xl"
            >
              Search Breed <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col gap-4 w-full relative">
              <input
                type="text"
                name=""
                className="h-12 border-2 px-2 rounded-md outline-none "
                value={searchquery}
                required
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter the breed here..."
              />
              <div className="suggestion-area hidden   w-full border-2 h-44 overflow-y-scroll  top-14 absolute  bg-white">
                {/* suggestion list will be here */}
                {selectedCategory === "Dog"
                  ? filteredDogSuggestions.map((item) => {
                      return (
                        <p
                          key={item}
                          className="p-2 hover:bg-gray-200 cursor-pointer hover:font-medium "
                          onClick={() => setSearchQuery(item)}
                        >
                          {item}
                        </p>
                      );
                    })
                  : filteredCatSuggestions.map((item) => {
                      return (
                        <p
                          key={item}
                          className="p-2 hover:bg-gray-200 cursor-pointer hover:font-medium "
                          onClick={() => setSearchQuery(item)}
                        >
                          {item}
                        </p>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 w-full items-center">
          {/* age */}
          <div className="age flex flex-col w-full">
            <label htmlFor="Age" className="font-bold text-gray-900 text-xl">
              Select Age
            </label>
            <select
              name="age"
              className="border-2 h-12 rounded-md p-2 outline-none cursor-pointer"
            >
              <option value="">Select</option>
              <option value="adult">Adult</option>
              <option value="young">Young</option>
              <option value="senior">Senior</option>
            </select>
          </div>
          {/* location */}
          <div className="location flex flex-col w-full  relative ">
            <label
              htmlFor="location"
              className="font-bold text-gray-900 text-xl"
            >
              Location<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name=""
              className="h-12 border-2 px-4 rounded-md outline-none"
              placeholder="search around your location"
            />
            <div className="suggestion-area hidden    w-full border-2 h-[50vh] overflow-y-scroll   top-20 absolute bg-white">
              {/* suggestion list will be here */}
              {cities.map((item) => {
                return (
                  <p
                    key={item.id}
                    className="p-2 hover:bg-gray-200 hover:font-bold cursor-pointer "
                    onClick={() => setSearchQuery(item)}
                  >
                    {item.name},{item.state}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        {/* button */}
        <div className="btn flex items-center justify-center gap-4 text-center w-fit m-2  text-white active:scale-95 px-6 py-2 bg-blue-500 cursor-pointer shadow shadow-blue-500">
          <button className="font-bold text-xl" onClick={handleClick}>
            Search
          </button>
          <FaSearch />
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Form;

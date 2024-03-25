// import React from 'react'
import { catBreeds, cities } from "../../../Data";
import { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  // eslint-disable-next-line no-unused-vars
  const notify = () =>
    toast("", {
      position: "top",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const inputRef = useRef();
  const suggestionAreaRef = useRef();
  const [suggestionlist, setSuggestionList] = useState([]);
  const [searchquery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Select");
  const [suggestionAreaVisible, setSuggestionAreaVisible] = useState(false);

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

  const handlClick = (e) => {
    e.preventDefault();
    if (selectedCategory === "Select" || searchquery === "") {
      toast.error("Please select a category and enter some keywords!");
    }
  };

  //  Function to filter suggestions based on user input for dog
  const filteredDogSuggestions = suggestionlist.filter((item) =>
    item.toLowerCase().includes(searchquery?.toLowerCase())
  );
  //    Sort the filtered array alphabetically for cat
  const filteredCatSuggestions = catBreeds.filter((item) =>
    item.toLowerCase().includes(searchquery?.toLowerCase())
  );

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target !== inputRef.current &&
        e.target !== suggestionAreaRef.current
      ) {
        setSuggestionAreaVisible(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => {});
    };
  }, [inputRef, suggestionAreaRef]);
  return (
    <div className="form-container  bg-white/20 backdrop-blur-md  flex flex-col items-center justify-start w-full h-[60vh] overflow-y-scroll rounded-md shadow-md  ">
      <ToastContainer />
      <div className="bg-transparent p-2 rounded-md">
        <h1 className="text-[4vmin] font-bold py-4 text-white">
          Search Based on Your Requirment
        </h1>
      </div>
      <form
        action=""
        className=" flex flex-col  items-center lg:flex-row flex-wrap justify-center px-12 gap-4 h-auto w-full "
      >
        <div className="flex flex-col lg:flex-row w-full gap-2">
          {/* category */}
          <div className="Categoryselect flex flex-col w-full gap-2">
            <label htmlFor="Category" className="font-bold text-white text-xl">
              Category<span className="text-red-500">*</span>
            </label>
            <select
              name="Category"
              id="Categoryselect"
              className="px-2  rounded-md border-2 h-12 outline-none "
              required
              onChange={(event) => {
                setSelectedCategory(event.target.value),
                  selectedCategory !== "Select"
                    ? setSuggestionAreaVisible(true)
                    : setSuggestionAreaVisible(false),
                  setSearchQuery("");
              }}
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
              className="font-bold text-white text-xl"
            >
              Search Breed <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col gap-4 w-full relative">
              <input
                type="text"
                name=""
                ref={inputRef}
                className="h-12 border-2 px-2 rounded-t-md outline-none "
                value={searchquery}
                required
                disabled={selectedCategory === "Select"}
                onFocus={() => setSuggestionAreaVisible(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter the breed here..."
              />
              {suggestionAreaVisible && selectedCategory !== "Select" && (
                <div
                  ref={suggestionAreaRef}
                  className="suggestion-area z-[10]  w-full border-2 h-44 overflow-y-scroll rounded-b-md  top-12 absolute  bg-white"
                >
                  {/* suggestion list will be here */}
                  {selectedCategory === "Dog" &&
                    filteredDogSuggestions.map((item) => {
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
                  {selectedCategory === "Cat" &&
                    filteredCatSuggestions.map((item) => {
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
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 w-full items-center">
          {/* age */}
          <div className="age flex flex-col w-full">
            <label htmlFor="Age" className="font-bold text-white text-xl">
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
            <label htmlFor="location" className="font-bold text-white text-xl">
              Location<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name=""
              disabled={selectedCategory === "Select"}
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
            <button className="font-bold text-xl" onClick={handlClick}>
              Search
            </button>
            <FaSearch />
          </div>
      </form>
    </div>
  );
};

export default Form;

// import React from 'react'

// import { useEffect, useState } from "react";

const Form = () => {
  //   const [suggestionlist, setSuggestionList] = useState([]);
  //     const [searchquery, setSearchQuery] = useState("");
  //     const [selectedCategory , setSelectedCategory] =useState("")
  //   // const SelectedOptionRef = useRef()
  //   //    console.log(SelectedOptionRef);
  //   useEffect(() => {
  //     fetch("https://dog.ceo/api/breeds/list/all")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.message);
  //         setSuggestionList(Object.keys(data.message));
  //         console.log(suggestionlist);
  //       });
  //   });
  return (
    <div className="form-container bg-slate-100  flex flex-col gap-4 items-center justify-start  p-4 ">
      <div className="">
        <h1 className="text-[2vmax] font-bold">
          Search Based on Your Requirment
        </h1>
      </div>
      <form
        action=""
        className="flex items-center flex-col lg:flex-row flex-wrap justify-center p-12 gap-12 w-full"
      >
        {/* category */}
        <div className="Categoryselect flex flex-col w-1/2 lg:w-1/6 gap-2">
          <label htmlFor="Category" className="font-bold text-gray-900 text-xl">
            Category
          </label>
          <select
            name="Category"
            id="Categoryselect"
            className="px-2  rounded-md border-2 h-12"
            // onChange={(event) => setSelectedCategory(event.target.value)}
            // defaultValue={selectedCategory}
          >
            <option value="Select">Select</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
        </div>
        {/* breed */}
        <div className="breedselect flex flex-col justify-around w-1/2 lg:w-1/6 gap-2">
          <label
            htmlFor="breedSelect"
            className="font-bold text-gray-900 text-xl"
          >
            Search Breed
          </label>
          <div className="flex flex-col gap-4 w-full relative">
            <input
              type="text"
              name=""
              className="h-12 border-2 px-2 "
              //   value={searchquery}
              //   onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="suggestion-area hidden  w-full border-2 h-44 overflow-scroll px-4  top-14 absolute bg-white">
              {/* suggestion list will be here */}
              {/* {
                
                {suggestionlist.map((item) => {
                return (
                  <p className="p-2 hover:bg-gray-200 "  onClick={()=>setSearchQuery(item)}>{item}</p>
                );
              })}
                
              } */}
            </div>
          </div>
        </div>
        {/* age */}
        <div className="age flex flex-col w-1/2 lg:w-1/6 gap-2">
          <label htmlFor="Age" className="font-bold text-gray-900 text-xl">
            Select Age
          </label>
          <select name="age" className="border-2 h-12">
            <option value="">Select</option>
            <option value="adult">Adult</option>
            <option value="young">Young</option>
            <option value="senior">Senior</option>
          </select>
        </div>
        {/* location */}
        <div className="location flex flex-col w-1/2 lg:w-1/6">
          <label htmlFor="location" className="font-bold text-gray-900 text-xl">
            Location
          </label>
          <input
            type="text"
            name=""
            className="h-12 border-2 px-4"
            placeholder="search around your location"
          />
        </div>
        {/* button */}
        <div className="btn text-center text-white active:scale-95 px-6 py-2 bg-blue-500">
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

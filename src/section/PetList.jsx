// import {useState , useEffect } from 'react'
const FindPet = () => {
  // const [petList, setPetList] = useState()

  // useEffect(() => {
  //   const fetchPetList = async() => {

  //   }

  //   fetchPetList()
  // },[])
  return (
    <div className="h-[100dvh]">
      <div className="sorting">
        <div className=""></div>
        <div className="flex">
          <input type="search" name="" id="" placeholder="Search by pet name" />
          <button>Search</button>
        </div>
      </div>
      {/* list */}
      <div className="Pet-list"></div>
    </div>
  );
};

export default FindPet;

// https://api.api-ninjas.com/v1/dogs?name=

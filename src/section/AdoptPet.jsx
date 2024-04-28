// import React from 'react'
import {useEffect , useState} from 'react'
const AdoptPet = () => {
  const [name , setName] = useState([])
   
    useEffect(() => {
      const fetchName = async () => {
        try {
          const response = await fetch("/api/name");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setName(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle error as needed, e.g., set a default list
        }
      };

      fetchName();

      // Cleanup function not needed in this case since there are no subscriptions or intervals
    }, []);

  return <div className="h-[100vh]">
    <h1>Number Of Pet Owner:{ name.length}</h1>
    {
      name.map((item) => {
        return (<li key={item.id}>{ item.name}</li>)
      })
    }
  </div>;
};

export default AdoptPet;

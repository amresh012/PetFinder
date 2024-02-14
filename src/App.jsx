import { Suspense } from "react";
import { Routes, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import {FindPet ,AdoptPet , Contact} from "./section";
import {Layout} from './Layout'
import "./App.css";
import PetCare from "./section/PetCare";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/Findpet' element={<FindPet />} />
          <Route path='/adopt' element={<AdoptPet />} />
          <Route path="Petcare" element ={<PetCare/>}/>
          <Route path='/contact' element={<Contact />} />
          
        </Route>
      </Routes>
   </Suspense>
  );
};


export default App;

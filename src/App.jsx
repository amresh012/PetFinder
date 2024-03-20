import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { FindPet, AdoptPet } from "./section";
import { Layout, AuthenLayout } from "./Layout";
import SignUp from "./Pages/Authentication/SignUp";
import Login from './Pages/Authentication/Login'
import "./App.css";
import PetCare from "./section/PetCare";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Findpet" element={<FindPet />} />
          <Route path="/adopt" element={<AdoptPet />} />
          <Route path="Petcare" element={<PetCare />} />
        </Route>

        {/* Auth layout */}
        <Route path="/auth/*" element={<AuthenLayout />}>
          <Route path="SignUp" element={<SignUp />}/>  
          <Route path="login" element={<Login />}/>  
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { PetList, AdoptPet } from "./section";
import { Layout, AuthenLayout } from "./Layout";
import SignUp from "./Pages/Authentication/SignUp";
import Login from './Pages/Authentication/Login'
import "./App.css";
import PetCare from "./section/PetCare";
import Contact from "./section/Contact";
import Blog from "./components/HomePageComp/Blog/Blog";
const App = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Findpet" element={<PetList />} />
          <Route path="/adopt" element={<AdoptPet />} />
          <Route path="/petcare" element={<PetCare />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Auth layout */}
        <Route path="/auth/*" element={<AuthenLayout />}>
          <Route path="SignUp" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

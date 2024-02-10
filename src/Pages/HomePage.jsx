import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Footer from "../components/CommanComponent/Footer/Footer";
import FeatuedPet from "../components/FeaturedPet/FeatuedPet";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Features from "../components/OurFeatures/Features";
const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <FeatuedPet />
      <Features />
      <About />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePage;

import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Faq from "../components/FAQComponent/Faq";
import FeatuedPet from "../components/FeaturedPet/FeatuedPet";
import Hero from "../components/Hero/Hero";
import Features from "../components/OurFeatures/Features";
const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <FeatuedPet />
      <Features />
      <About />
      <Blog />
      <Faq />
    </div>
  );
};

export default HomePage;

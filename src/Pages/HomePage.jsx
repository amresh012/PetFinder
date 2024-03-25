import About from "../components/HomePageComp/About/About";
import Hero from "../components/HomePageComp/Hero/Hero";
import Features from "../components/HomePageComp/Services/Features";
import Adoption from "../components/HomePageComp/Adoption/Adoption";
// import FeatuedPet from "../components/HomePageComp/FeaturedPet/FeatuedPet";
import Blog from "../components/HomePageComp/Blog/Blog";
import Faq from "../components/HomePageComp/FAQComponent/Faq";

// import ImageGallery from "../components/HomePageComp/ImageGallery/ImageGallery";
const HomePage = () => {
  return (
    <div className=" overflow-clip">
      <Hero />
      {/* <Form /> */}
      <About />
      <Features />
      <Adoption />
      {/* <ImageGallery/> */}
      {/* <FeatuedPet /> */}
      <Blog />
      <Faq />
    </div>
  );
};

export default HomePage;

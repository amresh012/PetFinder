import About from "../components/HomePageComp/About/About";
import Hero from "../components/HomePageComp/Hero/Hero";
import Features from "../components/HomePageComp/Services/Features";
import Form from "../components/HomePageComp/Form/Form";
import Adoption from "../components/HomePageComp/Adoption/Adoption";
const HomePage = () => {
  return (
    <div className=" overflow-clip">
      <Hero />
      <Form />
      <About />
      <Features />
      <Adoption />
      {/* <FeatuedPet /> */}
      {/* <Blog /> */}
      {/* <Faq /> */}
    </div>
  );
};

export default HomePage;

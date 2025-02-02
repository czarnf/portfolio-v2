import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import TechStack from "../components/TechStack";

const Index = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Work />
      <Contact />
    </div>
  );
};

export default Index;
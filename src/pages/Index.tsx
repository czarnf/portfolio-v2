import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import TechStack from "../components/TechStack";
import Tools from "../components/Tools";

const Index = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Tools />
      <Work />
      <Contact />
    </div>
  );
};

export default Index;
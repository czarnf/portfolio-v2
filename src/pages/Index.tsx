import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import TechStack from "../components/TechStack";
import Tools from "../components/Tools";
import Blog from "../components/Blog";

const Index = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Tools />
      <Work />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
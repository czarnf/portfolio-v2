
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import TechStack from "../components/TechStack";
import Tools from "../components/Tools";
import Blog from "../components/Blog";
import SkipLink from "../components/SkipLink";

const Index = () => {
  return (
    <>
      <SkipLink />
      <div className="font-inter">
        <header role="banner">
          <Navbar />
        </header>
        <main id="main-content" role="main" className="focus:outline-none" tabIndex={-1}>
          <Hero />
          <About />
          <TechStack />
          <Tools />
          <Work />
          <Blog />
          <Contact />
        </main>
        <footer role="contentinfo" className="py-8 px-4 text-center bg-light dark:bg-dark">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Portfolio. Built with accessibility in mind.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Index;

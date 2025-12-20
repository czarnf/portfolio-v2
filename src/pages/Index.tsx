import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Methodology from "../components/Methodology";
import Philosophy from "../components/Philosophy";
import InsightsStrategy from "../components/InsightsStrategy";
import SkipLink from "../components/SkipLink";

const Index = () => {
  return (
    <>
      <SkipLink />
      <div className="font-sans">
        <header role="banner">
          <Navbar />
        </header>
        <main id="main-content" role="main" className="focus:outline-none" tabIndex={-1}>
          <Hero />
          <About />
          <Skills />
          <Work />
          <InsightsStrategy />
          <Methodology />
          <Philosophy />
          <Testimonials />
          <Contact />
        </main>
        <footer role="contentinfo" className="py-10 px-4 text-center bg-muted border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Emmanuel Chiefson. Strategic IT Leadership.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Index;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MotionLayer, ScrollProgress } from "@/components/site/motion/MotionLayer";
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <ScrollProgress />
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MotionLayer />
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;

import { useState, useEffect } from "react";
import { Menu, X, FileText, Github, Linkedin } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Pi-Shaped Model", href: "#pi-shaped" },
    { name: "Competencies", href: "#competencies" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Insights", href: "#insights" },
    { name: "Methodology", href: "#methodology" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
          >
            EC<span className="text-accent">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {item.name}
              </a>
            ))}
            
            <div className="w-px h-5 bg-border mx-2" />
            
            {/* Social Links */}
            <a
              href="https://github.com/emmanuelchiefson"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              aria-label="GitHub - Project Frameworks & AI Configurations"
              title="Project Frameworks & AI Configurations"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/emmanuelchiefson"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <ModeToggle />
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="cta-primary ml-2 inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg transition-all duration-300 hover:bg-accent/90"
            >
              <FileText className="w-4 h-4" />
              Contact
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />
            <button
              className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 space-y-1 bg-background border-b border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex gap-4 px-4 py-3">
                <a
                  href="https://github.com/emmanuelchiefson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/emmanuelchiefson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
              
              <a
                href="#contact"
                className="block px-4 py-3 mt-2 bg-accent text-accent-foreground rounded-lg font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

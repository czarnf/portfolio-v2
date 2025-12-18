import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
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
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a 
            href="#" 
            className="text-xl font-bold text-foreground hover:text-accent transition-colors"
          >
            OO<span className="text-accent">.</span>
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
            
            <div className="w-px h-6 bg-border mx-2" />
            
            <ModeToggle />
            
            {/* CTA Button - Most prominent element */}
            <a
              href="#contact"
              className="cta-glow ml-2 inline-flex items-center gap-2 px-5 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-accent/90"
            >
              <FileText className="w-4 h-4" />
              Resume
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
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              <a
                href="#contact"
                className="block px-4 py-3 mt-2 bg-accent text-accent-foreground rounded-lg font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

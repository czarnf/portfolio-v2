import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#" className="text-xl font-bold text-primary dark:text-white">Portfolio</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <button
              className="text-primary dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background dark:bg-gray-900 border-b border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
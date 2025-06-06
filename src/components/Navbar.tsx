import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle navigation
  const handleNavigation = (section: string) => {
    if (location.pathname !== '/') {
      // If we're not on the home page, navigate to home with the section hash
      window.location.href = `/#${section}`;
    } else {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">CozyStay</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavigation('about')} 
            className="font-medium hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleNavigation('locations')} 
            className="font-medium hover:text-primary transition-colors"
          >
            Locations
          </button>
          <button 
            onClick={() => handleNavigation('amenities')} 
            className="font-medium hover:text-primary transition-colors"
          >
            Amenities
          </button>
          <button 
            onClick={() => handleNavigation('rooms')} 
            className="font-medium hover:text-primary transition-colors"
          >
            Rooms
          </button>
          <button 
            onClick={() => handleNavigation('book')} 
            className="btn-primary"
          >
            Book a Visit
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 absolute top-full left-0 right-0 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-4">
            <button 
              onClick={() => {
                handleNavigation('about');
                toggleMenu();
              }}
              className="font-medium hover:text-primary transition-colors py-2 px-4 text-left"
            >
              About
            </button>
            <button 
              onClick={() => {
                handleNavigation('locations');
                toggleMenu();
              }}
              className="font-medium hover:text-primary transition-colors py-2 px-4 text-left"
            >
              Locations
            </button>
            <button 
              onClick={() => {
                handleNavigation('amenities');
                toggleMenu();
              }}
              className="font-medium hover:text-primary transition-colors py-2 px-4 text-left"
            >
              Amenities
            </button>
            <button 
              onClick={() => {
                handleNavigation('rooms');
                toggleMenu();
              }}
              className="font-medium hover:text-primary transition-colors py-2 px-4 text-left"
            >
              Rooms
            </button>
            <button 
              onClick={() => {
                handleNavigation('book');
                toggleMenu();
              }}
              className="btn-primary mx-4 text-center"
            >
              Book a Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-semibold">
          <a href="/">Logo</a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-400">Home</a>
          <a href="/about" className="text-white hover:text-gray-400">About</a>
          <a href="/services" className="text-white hover:text-gray-400">Services</a>
          <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white space-y-4 p-4">
          <a href="/" className="block">Home</a>
          <a href="/about" className="block">About</a>
          <a href="/services" className="block">Services</a>
          <a href="/contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-400">Gourav Tiwari</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-teal-400">Home</a></li>
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./burger.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="mx-10">
      <nav className="bg-white text-gray fixed top-0 left-0 right-0 z-10 mx-10 px-6 py-4 flex items-center mt-10">
        <div className="flex items-center">
          <a className="navbar-brand h-13 w-14 mr-2 flex items-center" href="/">
            <img src={logo} alt="Logo" className="h-full" />
            <span className="font-semibold text-lg text-gray-900">InJoy</span>
          </a>
        </div>
        <div className="ml-auto hidden md:flex">
          <a className="ml-4" href="/">
            Home
          </a>
          <a className="ml-4" href="menu">
            Menu
          </a>
          <a className="ml-4" href="/about">
            About
          </a>
          <a className="ml-4" href="contact-us">
            Contact
          </a>
        </div>
        <div className="ml-auto md:hidden">
          <button
            className={`ml-4 custom-button ${showMenu ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {showMenu && (
            <div className="absolute top-16 right-0 mt-2 py-2 w-48 bg-white border rounded shadow-lg md:hidden">
              <a
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                href="/"
              >
                Home
              </a>
              <a
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                href="menu"
              >
                Menu
              </a>
              <a
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                href="/about"
              >
                About
              </a>
              <a
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                href="contact-us"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

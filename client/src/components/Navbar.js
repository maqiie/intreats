
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white text-gray fixed top-0 left-0 w-full z-10 mx-auto px-6 py-4 flex justify-between items-center mt-10">
      <a className="navbar-brand h-13 w-14 mr-2 flex items-center" href="/">
      {/* <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      </div> */}
        <img src={logo} alt="Logo" className="h-full" />
      </a>
      {/* Add other navigation components or links */}
      <a className="" href="home">
        Home
      </a>
      <a className="" href="menu">
        Menu
      </a>
      <a className="" href="about-us">
        About Us
      </a>
      <a className="" href="contact-us">
        Contact Us
      </a>
      
    </nav>
  );
};

export default Navbar;

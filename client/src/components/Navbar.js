
// import React from "react";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   return (
//     <div className=""> 
//     <nav className="bg-white text-gray fixed top-0 left-0 w-full z-10 mx-auto px-6 py-4 flex items-center mt-10">
//       <a className="navbar-brand h-13 w-14 mr-2 flex items-center" href="/">
//         <img src={logo} alt="Logo" className="h-full" />
//       </a>
//       <div className="ml-auto flex">
//         <a className="ml-4" href="home">
//           Home
//         </a>
//         <a className="ml-4" href="menu">
//           Menu
//         </a>
//         <a className="ml-4" href="about-us">
//           About 
//         </a>
//         <a className="ml-4" href="contact-us">
//           Contact 
//         </a>
//       </div>
//     </nav>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="mx-10">
      <nav className="bg-white text-gray fixed top-0 left-0 right-0 z-10 mx-10 px-6 py-4 flex items-center mt-10">
       <div>
        <a className="navbar-brand h-13 w-14 mr-2 flex items-center" href="/">
          <img src={logo} alt="Logo" className="h-full" />
          <span className="font-semibold text-lg text-gray-900">InJoy</span>

        </a>
        </div>
        <div className="ml-auto flex">
          <a className="ml-4" href="home">
            Home
          </a>
          <a className="ml-4" href="menu">
            Menu
          </a>
          <a className="ml-4" href="about-us">
            About
          </a>
          <a className="ml-4" href="contact-us">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

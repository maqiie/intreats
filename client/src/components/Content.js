// import React, { useState } from "react";
// import backgroundImage from "../assets/background.jpg"; // Adjust the path as needed
// import "./Content.css"; // Import your CSS file
// import Category from "./Category";  

// const Content = () => {
//   const [showCategory, setShowCategory] = useState(false);

//   const contentStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     minHeight: "100vh", // Adjust the height as needed
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const toggleCategory = () => {
//     setShowCategory(!showCategory);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="Content" style={contentStyle}>
//         <p className="text text-white dark:text-gray-400">
//           WHENEVER WE BAKE, BAKE WITH OUR HEART
//         </p>
//         <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//         <p className="theme text-white dark:text-white font-bold text-4xl text-center">
//           "InJoy: Delighting Taste Buds, One Sweet Surprise at a Time!"
//         </p>
//         <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
//         <p className="text text-white dark:text-gray-400">
//           "Welcome to Injoy Treats, where our baked goods are made with passion,
//           precision, and a sprinkle of happiness."
//         </p>
//         <br />
//         <br />
//         {!showCategory ? (
//           <button className="button" onClick={toggleCategory}>
//             <div className="btn-circle"></div>
//             <div className="btn-circle"></div>
//             <p className="btn-text">CHECK OUR MENU</p>
//           </button>
//         ) : (
//           <Category />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Content;
import React, { useState, useEffect } from "react";
import Typed from "typed.js";
import backgroundImage from "../assets/background.jpg"; // Adjust the path as needed
import "./Content.css"; // Import your CSS file
import Category from "./Category";

const Content = () => {
  const [showCategory, setShowCategory] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        `"InJoy: Delighting Taste Buds, One Sweet Surprise at a Time!"`,
      ],
      typeSpeed: 50, // Typing speed in milliseconds
      startDelay: 1000, // Delay before typing starts (in milliseconds)
      backSpeed: 30, // Speed for erasing characters (in milliseconds)
      backDelay: 1000, // Delay before erasing starts (in milliseconds)
      showCursor: true, // Show the blinking cursor
      cursorChar: "_", // Customize the cursor character
    };
    

    const typed = new Typed(".typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  const toggleCategory = () => {
    setShowCategory(!showCategory);
  };

  const contentStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Adjust the height as needed
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="Content" style={contentStyle}>
        <p className="text text-white dark:text-gray-400">
          WHENEVER WE BAKE, BAKE WITH OUR HEART
        </p>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="theme text-white dark:text-white font-bold text-4xl text-center typed-text">
          {/* Text will be typed here */}
        </p>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="text text-white dark:text-gray-400">
          "Welcome to Injoy Treats, where our baked goods are made with passion,
          precision, and a sprinkle of happiness."
        </p>
        <br />
        <br />
        {!showCategory ? (
          <button className="button" onClick={toggleCategory}>
            <div className="btn-circle"></div>
            <div className="btn-circle"></div>
            <p className="btn-text">CHECK OUR MENU</p>
          </button>
        ) : (
          <Category />
        )}
      </div>
    </div>
  );
};

export default Content;

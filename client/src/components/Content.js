import React, { useState } from "react";
import backgroundImage from "../assets/background.jpg"; // Adjust the path as needed
import "./Content.css"; // Import your CSS file
import Category from "./Category";  

const Content = () => {
  const [showCategory, setShowCategory] = useState(false);

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

  const toggleCategory = () => {
    setShowCategory(!showCategory);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="Content" style={contentStyle}>
        <p className="text text-white dark:text-gray-400">
          WHENEVER WE BAKE, BAKE WITH OUR HEART
        </p>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="theme text-white dark:text-white font-bold text-4xl text-center">
          "InJoy: Delighting Taste Buds, One Sweet Surprise at a Time!"
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

import React from "react";
import backgroundImage from "../assets/background.jpg"; // Adjust the path as needed
import "./Content.css"; // Import your CSS file
import Category from "./Category";  
import { Link } from "react-router-dom";

const Content = () => { 
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
        <p className=" text text-white dark:text-gray-400">
          WHENEVER WE BAKE, BAKE WITH OUR HEART
        </p>
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className=" theme text-gray-500 dark:text-white font-bold text-4xl text-center">
          "InJoy: Delighting Taste Buds, One Sweet Surprise at a Time!"
        </p>

        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className=" text text-white dark:text-gray-400">
          "Welcome to Injoy Treats, where our baked goods are made with passion,
          precision, and a sprinkle of happiness."
        </p>
        <br />
        <br></br>
        <Link to="/category" className="button">

          <div class="btn-circle"></div>
          <div class="btn-circle"></div>
          <p class="btn-text">CHECK OUR MENU</p>
        </Link>
      </div>
    </div>
  );
};

export default Content;

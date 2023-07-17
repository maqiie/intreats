import React from "react";
import IMG1 from "../assets/cake.jpg";
import IMG2 from "../assets/doughnuts.jpg";
import IMG3 from "../assets/maandazi.jpeg";
import IMG4 from "../assets/pizza.jpg";
import { Styles } from "./category.css";

const Category = () => {
  return (
    <div className="category w-full">
      <h1>Category of available items</h1>
      <p></p>
      <div className="pair">
        <div className="maandazi">
          <img src={IMG1} alt="Avatar" />
          <p>cakes</p>
          <span></span>
        </div>
        <div className="Dohnuts">
          <img src={IMG2} alt="Avatar" />
          <p>Doughnut</p>
          <span></span>

        </div>
      </div>

      <div className="pair">
        <div className="Pizza">
          <img src={IMG3} alt="Avatar" />
          <p>maandazi</p>
          <span></span>

        </div>
        <div className="Cakes">
          <img src={IMG4} alt="Avatar" />
          <p>pizza</p>
          <span></span>

        </div>
      </div>
    </div>
  );
};

export default Category;

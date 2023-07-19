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
      
      <p className="text">We have the best treats for you.</p>
      <br />
      <div className="images">
      <div className="maandazi">
        <img src={IMG1} alt="Avatar" />
        <p>Cakes</p>
        <span className="text">
          Cakes are delicious treats enjoyed for special occasions.
        </span>
      </div>
      <br />
      <div className="Dohnuts">
        <img src={IMG2} alt="Avatar" />
        <p>Doughnut</p>
        <span className="text">
          Doughnuts: A heavenly creation of sweet, fried perfection.
        </span>
      </div>

      <br />
      <div className="Pizza">
        <img src={IMG3} alt="Avatar" />
        <p>Maandazi</p>
        <span className="text">
          Maandazi is a delicious East African fried dough treat enjoyed for its
          softness and delightful flavors.
        </span>
      </div>

      <br />
      <div className="Cakes">
        <img src={IMG4} alt="Avatar" />
        <p>Pizza</p>
        <span className="text">
          Pizzas are universally loved for their irresistible combination of
          flavors, crispy crust, and melty cheese.
        </span>
      </div>
      </div>
      <br/>
      <div>
      <button  >View Full Menu</button>
      <br/>
      </div>
    
    </div>
  );
};

export default Category;

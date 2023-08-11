import React from "react";
import cakeImage from "../assets/menu1.jpg";
import doughnutsImage from "../assets/menu2.jpg";
import maandaziImage from "../assets/menu3.jpg";
import cookies from "../assets/menu4.jpg";
import "./PopupMenu.css";

// const menuItems = [
//   { name: "Item 1", price: "$10.99", image: cakeImage },
//   { name: "Item 2", price: "$8.49", image: doughnutsImage },
//   { name: "Item 3", price: "$12.99", image: maandaziImage },
//   { name: "Item 4", price: "$9.99", image: cookies },
// ];
const menuItems = [
  { name: "Cake", price: "$10.99", image: cakeImage, flavors: ["Vanilla", "Chocolate"], weights: [0.5, 1, 2] },
  { name: "Maandazi", price: "$10.99", image: maandaziImage, flavors: ["Vanilla", "Chocolate"], weights: [0.5, 1, 2] },
  { name: "Cookies", price: "$10.99", image: cookies, flavors: ["Vanilla", "Chocolate"], weights: [0.5, 1, 2] },
  { name: "Doughnut", price: "$8.49", image: doughnutsImage, flavors: ["Glazed", "Chocolate", "Strawberry"], weights: [0.25, 0.5, 1] },
  // ... other items ...
];


const PopupMenu = ({ onClose }) => {
  return (
    <div className="popup-menu">
      <h2>Full Menu</h2>
      <ul>
      {menuItems.map((item, index) => (
  <li key={index}>
    <img src={item.image} alt={item.name} className="menu-item-image" />
    <span className="menu-item-name">{item.name}</span>
    <span className="menu-item-price">{item.price}</span>
    <div className="dropdown-container">
      <label htmlFor={`flavor-${index}`}>Select Flavor:</label>
      <select id={`flavor-${index}`} className="flavor-dropdown">
        {item.flavors.map((flavor, flavorIndex) => (
          <option key={flavorIndex}>{flavor}</option>
        ))}
      </select>
      <label htmlFor={`weight-${index}`}>Select Weight (kg):</label>
      <select id={`weight-${index}`} className="weight-dropdown">
        {item.weights.map((weight, weightIndex) => (
          <option key={weightIndex}>{weight}</option>
        ))}
      </select>
    </div>
  </li>
))}

      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupMenu;



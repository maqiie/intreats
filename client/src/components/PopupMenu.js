import React from "react";
import "./PopupMenu.css";

const menuItems = [
  { name: "Item 1", price: "$10.99" },
  { name: "Item 2", price: "$8.49" },
  { name: "Item 3", price: "$12.99" },
  { name: "Item 4", price: "$9.99" },
];

const PopupMenu = ({ onClose }) => {
  return (
    <div className="popup-menu">
      <h2>Full Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <span className="menu-item-name">{item.name}</span>
            <span className="menu-item-price">{item.price}</span>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupMenu;


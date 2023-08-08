import React from "react";
import  "./PopupMenu.css";


const PopupMenu = ({ onClose }) => {
  return (
    <div className="popup-menu">
      {/* Content of your pop-up menu */}
      <h2>Full Menu</h2>
      {/* Add your menu items and details here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PopupMenu;

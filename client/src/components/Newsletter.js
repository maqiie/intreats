import React, { useState } from "react";
import "./Newsletter.css";
import cakeImage from "../assets/cake.jpg";
import doughnutsImage from "../assets/doughnuts.jpg";
import maandaziImage from "../assets/maandazi.jpeg";
import OrderForm from "../Order";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Cake",
    image: cakeImage,
    prices: {
      "1kg": 1200,
      "1.5kg": 2000,
      "2kg": 2500,
    },
  },
  {
    name: "Doughnuts",
    image: doughnutsImage,
    prices: {
      "1 piece": 75,
      "6 pieces": 400,
      "12 pieces": 750,
    },
  },
  {
    name: "Maandazi",
    image: maandaziImage,
    prices: {
      "1 piece": 20,
      "3 pieces": 50,
      "6 pieces": 100,
    },
  },
];

const ProductCard = ({ name, image, prices }) => {
  const [selectedOption, setSelectedOption] = useState(Object.keys(prices)[0]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const calculateTotal = (selectedOption) => {
    return prices[selectedOption];
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="image" />
      <h3>{name}</h3>
      <p>Price: ${prices[selectedOption]}</p>
      <div className="dropdown">
        <label htmlFor={`dropdown-${name}`}>Select option:</label>
        <select
          id={`dropdown-${name}`}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {Object.keys(prices).map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button>Order Now</button>
    </div>
  );
};
const Newsletter = () => {
  return (
    <div className="news">
     <div className="flex-container">
        <h1 className="text-4xl font-bold">Order With Us Now</h1>
        {/* Use Link to navigate to OrderForm */}
        <Link to="/OrderForm">
          <p className="custom-link">make your custom Order</p>
        </Link>
      </div>

      <br></br>
      <div className="card-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            prices={product.prices}
          />
        ))}
      </div>
    </div>
  );
};

export default Newsletter;

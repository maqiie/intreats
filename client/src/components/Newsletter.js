import React, { useState } from 'react';
import IMG1 from "../assets/cake.jpg";
import IMG2 from "../assets/doughnuts.jpg";
import IMG3 from "../assets/maandazi.jpeg";
import './Newsletter.css'; // Assuming you have a separate CSS file for the component styles

const Newsletter = () => {
  // State to manage the checkbox values and quantities
  const [checkedItems, setCheckedItems] = useState({
    cake: { checked: false, kg: 0 },
    maandazi: { checked: false, pieces: 0, kg: 0 },
    doughnuts: { checked: false, pieces: 0, packs: 0 },
  });

  // State to store prices
  const prices = {
    cake: {
      1: 1200,   // 1kg cake costs 1200 shillings
      1.5: 2000, // 1.5kg cake costs 2000 shillings
      2: 2500,   // 2kg cake costs 2500 shillings
    },
    maandaziPerPiece: 20,
    maandaziPerKg: 400,
    doughnutsPerPiece: 75,
    doughnutsPack: 600,
  };

  // Function to handle checkbox change for cakes
  const handleCakeChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: { ...checkedItems[name], checked },
    });
  };

  // Function to handle checkbox change for maandazi
  const handleMaandaziChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      maandazi: { ...checkedItems.maandazi, checked },
    });
  };

  // Function to handle checkbox change for doughnuts
  const handleDoughnutsChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      doughnuts: { ...checkedItems.doughnuts, checked },
    });
  };

  // Calculate the total cost based on selected items and quantities
  const calculateTotal = () => {
    let total = 0;

    if (checkedItems.cake.checked) {
      total += prices.cake[checkedItems.cake.kg];
    }

    if (checkedItems.maandazi.checked) {
      total += prices.maandaziPerPiece * checkedItems.maandazi.pieces;
      total += prices.maandaziPerKg * checkedItems.maandazi.kg;
    }

    if (checkedItems.doughnuts.checked) {
      total += prices.doughnutsPerPiece * checkedItems.doughnuts.pieces;
      total += prices.doughnutsPack * checkedItems.doughnuts.packs;
    }

    return total;
  };

  return (
    <div>
      {/* Cake */}
      <div>
        <img src={IMG1} alt="Cake" style={{ width: '200px' }} />
        <label className="container">
          <input
            type="checkbox"
            name="cake"
            checked={checkedItems.cake.checked}
            onChange={handleCakeChange}
          />
          <span className="check">
            <svg width="18px" height="18px" viewBox="0 0 18 18">
              <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
          </span>
        </label>
        {checkedItems.cake.checked && (
          <div>
            <label>
              <input
                type="radio"
                name="cakeQuantity"
                value="1"
                checked={checkedItems.cake.kg === 1}
                onChange={() => setCheckedItems({
                  ...checkedItems,
                  cake: { ...checkedItems.cake, kg: 1 },
                })}
              />
              1kg - ${prices.cake[1]}
            </label>
            <label>
              <input
                type="radio"
                name="cakeQuantity"
                value="1.5"
                checked={checkedItems.cake.kg === 1.5}
                onChange={() => setCheckedItems({
                  ...checkedItems,
                  cake: { ...checkedItems.cake, kg: 1.5 },
                })}
              />
              1.5kg - ${prices.cake[1.5]}
            </label>
            <label>
              <input
                type="radio"
                name="cakeQuantity"
                value="2"
                checked={checkedItems.cake.kg === 2}
                onChange={() => setCheckedItems({
                  ...checkedItems,
                  cake: { ...checkedItems.cake, kg: 2 },
                })}
              />
              2kg - ${prices.cake[2]}
            </label>
          </div>
        )}
      </div>

      {/* Doughnuts */}
      <div>
        <img src={IMG2} alt="Doughnuts" style={{ width: '200px' }} />
        <label className="container">
          <input
            type="checkbox"
            name="doughnuts"
            checked={checkedItems.doughnuts.checked}
            onChange={handleDoughnutsChange}
          />
          <span className="check">
            <svg width="18px" height="18px" viewBox="0 0 18 18">
              <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
          </span>
        </label>
        {checkedItems.doughnuts.checked && (
          <div>
            <p>Enter the number of pieces:</p>
            <input
              type="number"
              placeholder="Enter pieces"
              value={checkedItems.doughnuts.pieces}
              onChange={(e) => setCheckedItems({
                ...checkedItems,
                doughnuts: { ...checkedItems.doughnuts, pieces: e.target.value },
              })}
            />
            <p>Enter the number of packs:</p>
            <input
              type="number"
              placeholder="Enter packs"
              value={checkedItems.doughnuts.packs}
              onChange={(e) => setCheckedItems({
                ...checkedItems,
                doughnuts: { ...checkedItems.doughnuts, packs: e.target.value },
              })}
            />
            <span>
              - ${prices.doughnutsPerPiece * checkedItems.doughnuts.pieces + prices.doughnutsPack * checkedItems.doughnuts.packs}
            </span>
          </div>
        )}
      </div>

      {/* Maandazi */}
      <div>
        <img src={IMG3} alt="Maandazi" style={{ width: '200px' }} />
        <label className="container">
          <input
            type="checkbox"
            name="maandazi"
            checked={checkedItems.maandazi.checked}
            onChange={handleMaandaziChange}
          />
          <span className="check">
            <svg width="18px" height="18px" viewBox="0 0 18 18">
              <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
              <polyline points="1 9 7 14 15 4"></polyline>
            </svg>
          </span>
        </label>
        {checkedItems.maandazi.checked && (
          <div>
            <p>Enter the number of pieces:</p>
            <input
              type="number"
              placeholder="Enter pieces"
              value={checkedItems.maandazi.pieces}
              onChange={(e) => setCheckedItems({
                ...checkedItems,
                maandazi: { ...checkedItems.maandazi, pieces: e.target.value },
              })}
            />
            <p>Enter the kilograms:</p>
            <input
              type="number"
              placeholder="Enter kilograms"
              value={checkedItems.maandazi.kg}
              onChange={(e) => setCheckedItems({
                ...checkedItems,
                maandazi: { ...checkedItems.maandazi, kg: e.target.value },
              })}
            />
            <span>
              - ${prices.maandaziPerPiece * checkedItems.maandazi.pieces + prices.maandaziPerKg * checkedItems.maandazi.kg}
            </span>
          </div>
        )}
      </div>

      {/* Display selected items and total cost */}
      <div className="total-section">
        <h3>Selected Items:</h3>
        <ul>
          {Object.keys(checkedItems).map((item) => (
            checkedItems[item].checked && (
              <li key={item}>
                {item} - ${item === 'cake'
                  ? prices.cake[checkedItems[item].kg]
                  : item === 'maandazi'
                  ? prices.maandaziPerPiece * checkedItems[item].pieces + prices.maandaziPerKg * checkedItems[item].kg
                  : prices.doughnutsPerPiece * checkedItems[item].pieces + prices.doughnutsPack * checkedItems[item].pack}
              </li>
            )
          ))}
        </ul>
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default Newsletter;


// import React, { useState } from "react";
// import IMG1 from "../assets/cake.jpg";
// import IMG2 from "../assets/doughnuts.jpg";
// import IMG3 from "../assets/maandazi.jpeg";
// import "./Newsletter.css"; // Assuming you have a separate CSS file for the component styles

// const Newsletter = () => {
//   // State to manage the checkbox values and quantities
//   const [checkedItems, setCheckedItems] = useState({
//     cake: { checked: false, kg: 0 },
//     maandazi: { checked: false, pieces: 0, kg: 0 },
//     doughnuts: { checked: false, pieces: 0, pack: 0 },
//   });

//   // State to store prices
//   const prices = {
//     cake: {
//       1: 1200, // 1kg cake costs 1200 shillings
//       1.5: 2000, // 1.5kg cake costs 2000 shillings
//       2: 2500, // 2kg cake costs 2500 shillings
//     },
//     maandaziPerPiece: 20,
//     maandaziPerKg: 400,
//     doughnutsPerPiece: 75,
//     doughnutsPack: 600,
//   };

//   // Function to handle checkbox change for cakes
//   const handleCakeChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems({
//       ...checkedItems,
//       [name]: { ...checkedItems[name], checked },
//     });
//   };

//   // Function to handle checkbox change for maandazi
//   const handleMaandaziChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems({
//       ...checkedItems,
//       maandazi: { ...checkedItems.maandazi, checked },
//     });
//   };

//   // Function to handle checkbox change for doughnuts
//   const handleDoughnutsChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems({
//       ...checkedItems,
//       doughnuts: { ...checkedItems.doughnuts, checked },
//     });
//   };

//   // Calculate the total cost based on selected items and quantities
//   const calculateTotal = () => {
//     let total = 0;

//     if (checkedItems.cake.checked) {
//       total += prices.cake[checkedItems.cake.kg];
//     }

//     if (checkedItems.maandazi.checked) {
//       if (checkedItems.maandazi.pieces > 0) {
//         total += prices.maandaziPerPiece * checkedItems.maandazi.pieces;
//       }
//       if (checkedItems.maandazi.kg > 0) {
//         total += prices.maandaziPerKg * checkedItems.maandazi.kg;
//       }
//     }

//     if (checkedItems.doughnuts.checked) {
//       if (checkedItems.doughnuts.pieces > 0) {
//         total += prices.doughnutsPerPiece * checkedItems.doughnuts.pieces;
//       }
//       if (checkedItems.doughnuts.pack > 0) {
//         total += prices.doughnutsPack;
//       }
//     }

//     return total;
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-center h-screen">
//         <h1 className="text-4xl font-bold">Order With Us Now.</h1>
//       </div>{" "}
//       <div>
//         <img src={IMG1} alt="Cake" className="image" />
//         <label className="container">
//           <input
//             type="checkbox"
//             name="cake"
//             checked={checkedItems.cake.checked}
//             onChange={handleCakeChange}
//           />
//           <span className="checkmark"></span>
//         </label>
//         {checkedItems.cake.checked && (
//           <div className="options-section">
//             <p>Choose cake weight:</p>
//             <label>
//               <input
//                 type="radio"
//                 name="cakeWeight"
//                 value="1"
//                 checked={checkedItems.cake.kg === 1}
//                 onChange={() =>
//                   setCheckedItems({
//                     ...checkedItems,
//                     cake: { ...checkedItems.cake, kg: 1 },
//                   })
//                 }
//               />
//               1kg - ${prices.cake[1]}
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="cakeWeight"
//                 value="1.5"
//                 checked={checkedItems.cake.kg === 1.5}
//                 onChange={() =>
//                   setCheckedItems({
//                     ...checkedItems,
//                     cake: { ...checkedItems.cake, kg: 1.5 },
//                   })
//                 }
//               />
//               1.5kg - ${prices.cake[1.5]}
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="cakeWeight"
//                 value="2"
//                 checked={checkedItems.cake.kg === 2}
//                 onChange={() =>
//                   setCheckedItems({
//                     ...checkedItems,
//                     cake: { ...checkedItems.cake, kg: 2 },
//                   })
//                 }
//               />
//               2kg - ${prices.cake[2]}
//             </label>
//           </div>
//         )}
//       </div>
//       <div>
//         <img src={IMG2} alt="Doughnuts" className="image" />
//         <label className="container">
//           <input
//             type="checkbox"
//             name="doughnuts"
//             checked={checkedItems.doughnuts.checked}
//             onChange={handleDoughnutsChange}
//           />
//           <span className="checkmark"></span>
//         </label>
//         {checkedItems.doughnuts.checked && (
//           <div className="options-section">
//             <p>Enter the number of pieces:</p>
//             <input
//               type="number"
//               placeholder="Enter pieces"
//               value={checkedItems.doughnuts.pieces}
//               onChange={(e) =>
//                 setCheckedItems({
//                   ...checkedItems,
//                   doughnuts: {
//                     ...checkedItems.doughnuts,
//                     pieces: e.target.value,
//                   },
//                 })
//               }
//             />
//             <p>Enter the number of packs:</p>
//             <input
//               type="number"
//               placeholder="Enter packs"
//               value={checkedItems.doughnuts.pack}
//               onChange={(e) =>
//                 setCheckedItems({
//                   ...checkedItems,
//                   doughnuts: {
//                     ...checkedItems.doughnuts,
//                     pack: e.target.value,
//                   },
//                 })
//               }
//             />
//           </div>
//         )}
//       </div>
//       <div>
//         <img src={IMG3} alt="Maandazi" className="image" />
//         <label className="container">
//           <input
//             type="checkbox"
//             name="maandazi"
//             checked={checkedItems.maandazi.checked}
//             onChange={handleMaandaziChange}
//           />
//           <span className="checkmark"></span>
//         </label>
//         {checkedItems.maandazi.checked && (
//           <div className="options-section">
//             <p>Enter the number of pieces:</p>
//             <input
//               type="number"
//               placeholder="Enter pieces"
//               value={checkedItems.maandazi.pieces}
//               onChange={(e) =>
//                 setCheckedItems({
//                   ...checkedItems,
//                   maandazi: {
//                     ...checkedItems.maandazi,
//                     pieces: e.target.value,
//                   },
//                 })
//               }
//             />
//             <p>Enter the kilograms:</p>
//             <input
//               type="number"
//               placeholder="Enter kilograms"
//               value={checkedItems.maandazi.kg}
//               onChange={(e) =>
//                 setCheckedItems({
//                   ...checkedItems,
//                   maandazi: { ...checkedItems.maandazi, kg: e.target.value },
//                 })
//               }
//             />
//           </div>
//         )}
//       </div>
//       {/* Display selected items and total cost */}
//       <div className="total-section">
//         <h3>Selected Items:</h3>
//         <ul>
//           {Object.keys(checkedItems).map(
//             (item) =>
//               checkedItems[item].checked && (
//                 <li key={item}>
//                   {item} - $
//                   {item === "cake"
//                     ? prices.cake[checkedItems[item].kg]
//                     : item === "maandazi"
//                     ? prices.maandaziPerPiece * checkedItems[item].pieces +
//                       prices.maandaziPerKg * checkedItems[item].kg
//                     : prices.doughnutsPerPiece * checkedItems[item].pieces +
//                       prices.doughnutsPack * checkedItems[item].pack}
//                 </li>
//               )
//           )}
//         </ul>
//         <h3 className="total-price">Total: ${calculateTotal()}</h3>
//         <button>Create custom Order</button>
//       </div>
//     </div>
//   );
// };

// export default Newsletter;
import React from "react";
import cakeImage from "../assets/cake.jpg";
import doughnutsImage from "../assets/doughnuts.jpg";
import maandaziImage from "../assets/maandazi.jpeg";
import "./Newsletter.css";

const products = [
  {
    name: "Cake",
    image: cakeImage,
    price: 1200,
  },
  {
    name: "Doughnuts",
    image: doughnutsImage,
    price: 75,
  },
  {
    name: "Maandazi",
    image: maandaziImage,
    price: 20,
  },
];

// Rest of the code remains unchanged


const ProductCard = ({ name, image, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="image" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button>Order Now</button>
    </div>
  );
};

const Newsletter = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Order With Us Now.</h1>
      </div>
      <div className="card-container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Newsletter;

import React, { useState } from 'react';

const OrderForm = () => {
  const [maandaziKg, setMaandaziKg] = useState(0);
  const [maandaziPiece, setMaandaziPiece] = useState(0);
  const [doughnutQty, setDoughnutQty] = useState(0);
  const [cakeKg, setCakeKg] = useState(0);
  const [customOrder, setCustomOrder] = useState('');

  const handleOrder = () => {
    const totalPrice =
      maandaziKg * 400 +
      maandaziPiece * 20 +
      doughnutQty * 400 +
      cakeKg * /*price per kg*/ 100 + // Adjust the price per kg as needed for cakes
      /* customOrder price calculation here */;

    // You can use this total price for further processing or display
    console.log('Total Price:', totalPrice);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Order Form</h1>

      {/* Maandazi */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Maandazi</h2>
        <label htmlFor="maandazi-kg" className="block">
          Kilograms:
          <input
            id="maandazi-kg"
            type="number"
            value={maandaziKg}
            onChange={(e) => setMaandaziKg(e.target.value)}
            className="border border-gray-400 px-2 py-1"
          />
        </label>
        <label htmlFor="maandazi-piece" className="block">
          Piece:
          <input
            id="maandazi-piece"
            type="number"
            value={maandaziPiece}
            onChange={(e) => setMaandaziPiece(e.target.value)}
            className="border border-gray-400 px-2 py-1"
          />
        </label>
      </div>

      {/* Doughnuts */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Doughnuts</h2>
        <label htmlFor="doughnut-qty" className="block">
          Quantity:
          <input
            id="doughnut-qty"
            type="number"
            value={doughnutQty}
            onChange={(e) => setDoughnutQty(e.target.value)}
            className="border border-gray-400 px-2 py-1"
          />
        </label>
      </div>

      {/* Cakes */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Cakes</h2>
        <label htmlFor="cake-kg" className="block">
          Kilograms:
          <input
            id="cake-kg"
            type="number"
            value={cakeKg}
            onChange={(e) => setCakeKg(e.target.value)}
            className="border border-gray-400 px-2 py-1"
          />
        </label>
      </div>

      {/* Custom Order */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Custom Order</h2>
        <label htmlFor="custom-order" className="block">
          Description:
          <textarea
            id="custom-order"
            value={customOrder}
            onChange={(e) => setCustomOrder(e.target.value)}
            className="border border-gray-400 px-2 py-1"
          />
        </label>
      </div>

      {/* Submit Button */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderForm;

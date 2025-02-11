import { useState } from 'react';

const MenuItem = ({ item, quantity, updateTotalItems }) => {
  const increment = () => {
    updateTotalItems(1);
  };

  const decrement = () => {
    if (quantity > 0) {
      updateTotalItems(-1);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
      <p className="text-gray-600 text-sm">{item.description}</p>
      
      <div className="flex items-center mt-4 ">
        <p className="text-primary font-bold   ">₹{item.price.trim()}</p>
        <button
          onClick={decrement}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors"
        >
          -
        </button>
        <span className="mx-4">{quantity}</span>
        <button
          onClick={increment}
          className="bg-primary text-white px-3 py-1 rounded-full hover:bg-primary-dark transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
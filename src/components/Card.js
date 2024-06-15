import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <div className="max-w-xs bg-cyan-100 p-4 rounded-lg shadow-lg m-6">
      <img
        className="h-64 w-full object-cover rounded-t-lg"
        src={card.imageLink}
        alt={card.itemName}
      />
      <div className="p-4 text-xl font-bold text-gray-700 space-y-2">
        <h1 className="text-2xl">{card.itemName}</h1>
        <h1>
          Rs.{card.price}<span>/kg</span>
        </h1>
        <p className="text-base">{card.villageAddress} <span role="img" aria-label="location">📍</span></p>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/PreOrder" className="bg-sky-500 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition duration-300">
          Pre-Order
        </Link>
      </div>
    </div>
  );
};

export default Card;

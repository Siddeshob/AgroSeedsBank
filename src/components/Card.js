import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ card, onLoginClick, onEditClick, PUTforEditTogel }) => {

  console.log(onEditClick);
  console.log(PUTforEditTogel);

  const onEditClickFunToToggle = () => {
    onEditClick(true);
  };

  const [PUTcardData, setPUTcardData] = useState({
    imageLink: card.imageLink,
    itemName: card.itemName,
    price: card.price,
    villageAddress: card.villageAddress,
  });

  const handlePUTcardFun = async (e) => {
    if (onEditClick === true) {
      try {
        const response = await axios.put(
          "http://localhost:8080/api/cards",
          PUTcardData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) alert("🎉🎉🎉Updated successfully🎉🎉🎉");
      } catch (e) {
        alert(e);
      }
    }
  };

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
          Rs.{card.price}
          <span>/kg</span>
        </h1>
        <p className="text-base">
          {card.villageAddress}{" "}
          <span role="img" aria-label="location">
            📍
          </span>
        </p>
      </div>
      <div className="flex justify-center mt-4">
        {/* <Link to="/PreOrder" className="bg-sky-500 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition duration-300">
          Pre-Order
        </Link> */}
        {!onLoginClick ? (
          <>
            <button
              className="bg-amber-600 text-white px-6 py-2 mx-4 rounded-md hover:bg-sky-700 transition duration-300"
              onClick={onEditClickFunToToggle}
            >
              <Link to={"/adminAddForm"}>Edit🛠️</Link>
            </button>
            <button className="bg-red-600 text-white px-6 py-2 mx-4 rounded-md hover:bg-sky-700 transition duration-300">
              Delete🗑️
            </button>
          </>
        ) : (
          <Link
            to="/PreOrder"
            className="bg-sky-500 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition duration-300"
          >
            Pre-Order
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;

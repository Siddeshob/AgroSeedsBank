import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ card, onLoginClick, onEditClick, PUTforEditTogel }) => {

const navigate=useNavigate()

  // Initialize state with card data
  const [PUTcardData, setPUTcardData] = useState({
    imageLink: card.imageLink,
    itemName: card.itemName,
    price: card.price,
    villageAddress: card.villageAddress,
    id: card.id,
  });


  // Function to handle edit click
  const onEditClickFunToToggle = () => {
    onEditClick(true);
  };

  // Function to handle card update
  const handlePUTcardFun = async () => {
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

      if (response.status === 200) alert("🎉 Updated successfully 🎉");
    } catch (e) {
      alert(e);
    }
  };

  // Function to handle card deletion
  const funForDeleteCards = async (card) => {
    if (!card || !card.id) {
      console.error("Invalid card object or card.id is undefined");
      return;
    }

    try {
      
      const response = await fetch(`http://localhost:8080/api/cards/${card.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(`Card with ID ${card.id} deleted successfully`);
      } else {
        console.error("Failed to delete card:", response.statusText);
      }
    } catch (e) {
      console.error("Error occurred while deleting the card:", e);
    }
  };

const handleUpdatez= (id)=> {navigate(`/card/${id}`)}


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
        {!onLoginClick ? (
          <>
            <button
              className="bg-amber-600 text-white px-6 py-2 mx-4 rounded-md hover:bg-sky-700 transition duration-300"
              onClick={()=>handleUpdatez(card.id)}
            >
             <Link to={`/update/${card.id}`}>Edit🛠️</Link>

            </button>
            <button
              onClick={() => funForDeleteCards(card)}
              className="bg-red-600 text-white px-6 py-2 mx-4 rounded-md hover:bg-sky-700 transition duration-300"
            >
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

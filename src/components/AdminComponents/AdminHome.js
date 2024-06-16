import React, { useState } from "react";
import useCardFetch from "../../CustomHooks/useCardFetch";
import Card from "../Card";
import { Link } from "react-router-dom";
import Header from "../Header";

const AdminHome = ({onLoginClick}) => {
  const [cards, setCards] = useState([]);
  useCardFetch(setCards);
  return (
    <div>
        <Header/>
        
      <div className="text-center my-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          <Link to={"/adminAddForm"}> Add New Item ➕</Link>
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {cards.map((card) => (
          <Card key={card.imageLink} card={card} isAdmin={true} />
        ))}
      </div>
    </div>
  );
};

export default AdminHome;

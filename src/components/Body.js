import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import useCardFetch from "../CustomHooks/useCardFetch";

const Body = () => {
  //state to hold the fetch card data
  const [cards, setCards] = useState([]);

  //---> Updating card toggle
  const [PUTforEditTogel, setPUTforEditTogel] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  //use this hook to fetch card data
  useCardFetch(setCards);

  
  const handleLoginClick = () => {
    setShowLoginPage(!showLoginPage);
  };

  const handleEditClick = (info) => {
    setPUTforEditTogel(info);
  };

  return (
    <div>
      <Header onLoginClick={handleLoginClick} />

      <div className="flex flex-wrap justify-center">
        {cards.map((card) => (
          <Card
            key={card.imageLink}
            card={card}
            onLoginClick={handleLoginClick}
            onEditClick={handleEditClick}
            PUTforEditTogel={true}
            
            
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Body;

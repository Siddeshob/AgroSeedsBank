import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import useCardFetch from "../CustomHooks/useCardFetch";

const Body = () => {
  // State to hold the fetched card data
  const [cards, setCards] = useState([]);

  // Log the fetched cards array
  console.log("Fetched cards:", cards);

  // Fetch card data using custom hook
  useCardFetch(setCards);

  // States for toggling features
  const [PUTforEditTogel, setPUTforEditTogel] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPage(!showLoginPage);
  };

  const handleEditClick = (info) => {
    setPUTforEditTogel(info);
  };

  console.log(process.env.REACT_APP_API_URL);

  return (
    <div>
      <Header onLoginClick={handleLoginClick} />

      <div className="flex flex-wrap justify-center">
        {cards.map((card) => (
          <Card
            key={card.imageLink} // Ensure that card.id is used as a key
            card={card}   // Pass the card object as a prop
            onLoginClick={handleLoginClick}
            onEditClick={handleEditClick}
            PUTforEditTogel={PUTforEditTogel}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Body;

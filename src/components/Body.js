import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import useCardFetch from "../CustomHooks/useCardFetch";

const Body = () => {

  //state to hold the fetch card data
  const[cards,setCards]=useState([])

  //use this hook to fetch card data
useCardFetch(setCards)



  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center">
        {cards.map((card)=><Card key={card.imageLink} card={card}/>)}
      </div>
      
      <Footer />
    </div>
  );
};

export default Body;

import { useEffect } from "react";

const useCardFetch = (setCards) => {
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/cards");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, [setCards]);
};

export default useCardFetch;

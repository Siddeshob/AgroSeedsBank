import { useEffect } from "react";

const useCardFetch = (setCards) => {
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/cards`);
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

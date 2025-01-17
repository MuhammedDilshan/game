import { useEffect, useState } from "react";
import { asset } from "../Assets/asset";

export const useCard = () => {
  const [totalClick, setTotalClick] = useState(10);
  const [flippedCards, setFlippedCards] = useState([]);
  const [lastOpenedCard, setLastOpenedCard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const isMatched = flippedCards[1]?.item?.name === lastOpenedCard;
    if (!isMatched && flippedCards.length === 2) {
      setError("Try again");
    } else if (isMatched && flippedCards.length === 2) {
      setError("You won!!");
    }
    if (!isMatched && flippedCards.length === 2) {
      setTimeout(() => {
        setFlippedCards([]);
        setError("");
      }, 1000);
    }
  }, [flippedCards]);

  const handleOpen = (item) => {
    setTotalClick(totalClick - 1);
    if (flippedCards.length === 0) {
      setLastOpenedCard(item.name);
    }
    if (flippedCards.length < 2) {
      setFlippedCards((prevCards) => [...prevCards, { item, fliped: true }]);
    } else if (totalClick === 0) {
      setFlippedCards([]);
    }
  };

  const resetFlippedCards = () => {
    setFlippedCards([]);
  };
  return { flippedCards, handleOpen, resetFlippedCards, totalClick, error };
};

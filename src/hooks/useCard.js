import { useEffect, useState } from "react";
import { asset } from "../Assets/asset";

export const useCard = () => {
  const [totalClick, setTotalClick] = useState(10);
  const [flippedCards, setFlippedCards] = useState([]);
  const [lastOpenedCard, setLastOpenedCard] = useState(null);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const isMatched = flippedCards[1]?.item?.name === lastOpenedCard;
    if (!isMatched && flippedCards.length === 2) {
      setError("Try again");
    } else if (isMatched && flippedCards.length === 2) {
      setError("You won!!");
      setScore(score + 1);
      setTimeout(() => {
        setFlippedCards([]);
      }, 1500);
    }
    if (!isMatched && flippedCards.length === 2) {
      setTimeout(() => {
        setFlippedCards([]);
        setError("");
      }, 1000);
    }
  }, [flippedCards]);

  const handleOpen = (item) => {
    setTotalClick(totalClick > 0 ? totalClick - 1 : 0);
    if (totalClick === 0) {
      alert("Your flips maximum reached");
      setFlippedCards([]);
      setTotalClick(10);
      return;
    }
    if (flippedCards.length === 0) {
      setLastOpenedCard(item.name);
    }
    if (flippedCards.length < 2 && totalClick > 0) {
      setFlippedCards((prevCards) => [...prevCards, { item, fliped: true }]);
    }
  };

  const resetFlippedCards = () => {
    setFlippedCards([]);
  };
  return {
    flippedCards,
    handleOpen,
    resetFlippedCards,
    totalClick,
    error,
    score,
    lastOpenedCard,
  };
};

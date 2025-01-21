import React from "react";
import { asset } from "../../Assets/asset";
import ItemCard from "../ItemCard/ItemCard";
import { useCard } from "../../hooks/useCard";

const Home = () => {
  const {
    handleOpen,
    isOpen,
    flippedCards,
    setTotalClick,
    totalClick,
    error,
    score,
    lastOpenedCard,
  } = useCard();
  return (
    <div className="h-[100vh] flex items-center justify-center flex-col md:flex-row">
      <div>
        <h4>Flips :{totalClick > 0 ? totalClick : 0}</h4>
        <h4
          className={`${
            error === "Try again" ? "text-red-600" : "text-lime-500"
          } text-2xl`}
        >
          {error}
        </h4>
        <h4>Point : {score}</h4>
        <h3>Last open : {lastOpenedCard}</h3>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 justify-center items-center md:px-[200px]">
        {asset.map((item) => (
          <ItemCard
            id={item.id}
            item={item}
            handleOpen={handleOpen}
            openCardId={isOpen}
            flippedCards={flippedCards}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

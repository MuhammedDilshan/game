import React from "react";
import { asset } from "../../Assets/asset";
import ItemCard from "../ItemCard/ItemCard";
import { useCard } from "../../hooks/useCard";

const Home = () => {
  const { handleOpen, isOpen, flippedCards, setTotalClick, totalClick, error } =
    useCard();
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div>
        <h4>{totalClick}</h4>
        <h4>{error}</h4>
      </div>
      <div className="grid grid-cols-4 gap-4 justify-center items-center px-[200px]">
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

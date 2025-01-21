import React, { useEffect } from "react";
import Style from "./ItemCard.module.css";

const ItemCard = (data) => {
  const { id, item, handleOpen, flippedCards } = data;
  const isFlipped = flippedCards.find((item) => item.item.id == id);
  return (
    <div
      className={`${Style.card} ${
        isFlipped?.fliped && Style.open
      } h-[200px] w-[200px] flex items-center`}
      onClick={() => handleOpen(item)}
    >
      <div class={`${Style.content} border border-yellow-600`}>
        <div class={Style.front}></div>
        <div class={Style.back}>
          <img src={item.image} alt="Item" className="block rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

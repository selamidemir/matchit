import React, { useState } from "react";
import { useGame } from "../contexts/GameContext";

function Item({ item }) {
  const { waitingTime, itemClicked, resetSelected } = useGame();
  const [showItem, setShowItem] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShowItem(true);
    itemClicked(item);
    setTimeout(() => {
      setShowItem(false);
      resetSelected();
    }, waitingTime);
  };

  return (
    <div className="item" onClick={(e) => handleClick(e)}>
      {(showItem || item.isFinded) && (
        <img
          className="item-image"
          src={`frameworks/${item.img}`}
          alt="find it"
        />
      )}
    </div>
  );
}

export default Item;

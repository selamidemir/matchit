import React from "react";
import Item from "./Item";
import { useGame } from "../contexts/GameContext";

function Board() {
  const { items } = useGame();
  return (
    <div className="board">
      {items && items.map((item, index) => <Item item={item} key={index} />)}
    </div>
  );
}

export default Board;

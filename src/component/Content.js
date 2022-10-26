import React from "react";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

function Content() {
  return (
    <div className="content">
      <Board />
      <div className="bg-gray"><ScoreBoard /></div>
    </div>
  );
}

export default Content;

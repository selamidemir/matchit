import React from "react";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

function Content() {
  return (
    <div className="content">
      <div className="board-cover">
        <Board />
        <div className="bg-lightblue score-board-cover">
          <ScoreBoard />
        </div>
      </div>
    </div>
  );
}

export default Content;

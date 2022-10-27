import React from "react";
import { useGame } from "../contexts/GameContext";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

function Content() {
  const { isGameOver, initGame } = useGame();
  const hanleNewGame = (e) => {
    e.preventDefault();
    initGame();
  };
  console.log("content rerendered")
  return (
    <div className="content">
      {isGameOver && (
        <div className="modal">
          <div>
            <p>GAME OVER</p>
            <p>
              <button onClick={(e) => hanleNewGame(e)}>NEW GAME</button>
            </p>
          </div>
        </div>
      )}
      <div className="board-cover">
        <Board />
        <div className="bg-gray score-board-cover">
          <ScoreBoard />
        </div>
      </div>
    </div>
  );
}

export default Content;

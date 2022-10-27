import React from "react";
import { useGame } from "../contexts/GameContext";
import Score from "./Score";

function ScoreBoard() {
  const { maxScore, initGame, moves } = useGame();
  const handleReset = e => {
    e.preventDefault();
    initGame();
  }
  
  return (
    <div className="score-board">
      <button onClick={(e) => handleReset(e)}>Reset Game</button>
      <span>Moves: {moves}</span>
      <Score />
      <span>Max Score: {maxScore}</span>
    </div>
  );
}

export default ScoreBoard;

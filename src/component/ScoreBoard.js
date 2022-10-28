import React from "react";
import { useGame } from "../contexts/GameContext";

function ScoreBoard() {
  const { score, maxScore, initGame, moves, isGameOver } = useGame();
  const handleResetGame = (e) => {
    e.preventDefault();
    initGame();
  };

  return (
    <div className="score-board">
      {isGameOver && (
        <div className="modal">
          <div className="result-window">
            <div>GAME OVER</div>
            <div className="your-score">Your Score is { score }</div>
            <div>
              <button onClick={(e) => handleResetGame(e)}>NEW GAME</button>
            </div>
          </div>
        </div>
      )}
      <button onClick={(e) => handleResetGame(e)}>Reset Game</button>
      <span>Moves: {moves}</span>
      <span>Score: {score}</span>
      <span>Max Score: {maxScore}</span>
    </div>
  );
}

export default ScoreBoard;

import { useState } from "react";
import Card from "./Card";

const ScoreBoard = () => {
  return (
    <div className="score-board">
      <div>Score: 0/12</div>
      <div>Best Score: 0/12</div>
    </div>
  );
};

export default ScoreBoard;

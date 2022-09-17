const ScoreBoard = (props) => {
  return (
    <div className="score-board">
      <div>Score: {props.score}/12</div>
      <div>Best Score: {props.best}/12</div>
    </div>
  );
};

export default ScoreBoard;

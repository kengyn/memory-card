import Card from "./components/Card";

const App = () => {
  return (
    <>
      <header>
        <h1>Genshin Memory Game</h1>
        <div className="score-board">
          <div>Score: 0/12</div>
          <div>Best Score: 0/12</div>
        </div>
      </header>
      <Card />
    </>
  );
};

export default App;

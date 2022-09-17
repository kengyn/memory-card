import { useState } from "react";
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {
  const [clicked, setClicked] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const checkBestScore = () => {
    if (clicked.length > bestScore) {
      setBestScore(clicked.length);
    }
  };

  const handleClicked = (card) => {
    if (clicked.some((e) => e.id === card.id)) {
      checkBestScore();
      setClicked([]);
    } else {
      setClicked([...clicked, { id: card.id, name: card.name }]);
    }
  };

  return (
    <>
      <header>
        <h1>Genshin Memory Game</h1>
        <ScoreBoard score={clicked.length} best={bestScore} />
      </header>
      <Card onClicked={handleClicked} />
    </>
  );
};

export default App;

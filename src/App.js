import { useState } from "react";
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";

const App = () => {
  const [clicked, setClicked] = useState([]);

  const handleClicked = (card) => {
    if (clicked.some((e) => e.id === card.id)) {
      console.log("LOSERRRRRRR");
      setClicked([]);
    } else {
      setClicked([...clicked, { id: card.id, name: card.name }]);
    }
  };

  return (
    <>
      <header>
        <h1>Genshin Memory Game</h1>
        <ScoreBoard />
      </header>
      <Card onClicked={handleClicked} />
    </>
  );
};

export default App;

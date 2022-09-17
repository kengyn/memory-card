import { useState, useEffect } from "react";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("../assets", false, /\.(webp)$/));

const cardList = [
  { id: 0, name: "Aether", src: images[0], element: "traveler" },
  { id: 1, name: "Amber", src: images[1], element: "pyro" },
  { id: 2, name: "Azhdaha", src: images[2], element: "geo" },
  { id: 3, name: "Fischl", src: images[3], element: "electro" },
  { id: 4, name: "Hu Tao", src: images[4], element: "pyro" },
  { id: 5, name: "Keqing", src: images[5], element: "electro" },
  { id: 6, name: "Lumine", src: images[6], element: "traveler" },
  { id: 7, name: "Mona", src: images[7], element: "hydro" },
  { id: 8, name: "Paimon", src: images[8], element: "traveler" },
  { id: 9, name: "Qiqi", src: images[9], element: "cryo" },
  { id: 10, name: "Rosaria", src: images[10], element: "cryo" },
  { id: 11, name: "Xiao", src: images[11], element: "anemo" },
];

const Card = ({ onClicked }) => {
  const [cards, setCards] = useState(cardList);

  const shuffled = cards
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);

  const renderCards = (deck) => {
    return deck.map((card) => (
      <div key={card.id} data-key={card.id} className={"card " + card.element}>
        <img src={card.src}></img>
        <p>{card.name}</p>
      </div>
    ));
  };

  useEffect(() => {
    let cards = document.querySelectorAll(".card");

    const randomize = (e) => {
      let chosenCards = shuffled;
      let key = () => {
        if (!e.target.parentNode.dataset.key) {
          return e.target.dataset.key;
        } else {
          return e.target.parentNode.dataset.key;
        }
      };
      setCards(chosenCards);
      onClicked(cardList[key()]);
    };

    cards.forEach((card) => card.addEventListener("click", randomize));

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", randomize);
      });
    };
  }, [cards]);

  return <div className="card-container">{renderCards(shuffled)}</div>;
};

export default Card;

const RenderCard = ({ card }) => {
  return (
    <div className={"card " + card.element}>
      <img src={card.src}></img>
      <p>{card.name}</p>
    </div>
  );
};

const Card = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context("../assets", false, /\.(webp)$/));

  const cards = [
    { name: "Aether", src: images[0], element: "traveler" },
    { name: "Amber", src: images[1], element: "pyro" },
    { name: "Azhdaha", src: images[2], element: "geo" },
    { name: "Fischl", src: images[3], element: "electro" },
    { name: "Hu Tao", src: images[4], element: "pyro" },
    { name: "Keqing", src: images[5], element: "electro" },
    { name: "Lumine", src: images[6], element: "traveler" },
    { name: "Mona", src: images[7], element: "hydro" },
    { name: "Paimon", src: images[8], element: "traveler" },
    { name: "Qiqi", src: images[9], element: "cryo" },
    { name: "Rosaria", src: images[10], element: "cryo" },
    { name: "Xiao", src: images[11], element: "anemo" },
  ];

  return (
    <div className="card-container">
      <RenderCard card={cards[0]} />
      <RenderCard card={cards[1]} />
      <RenderCard card={cards[2]} />
      <RenderCard card={cards[3]} />
      <RenderCard card={cards[4]} />
      <RenderCard card={cards[5]} />
      <RenderCard card={cards[6]} />
      <RenderCard card={cards[7]} />
      <RenderCard card={cards[8]} />
      <RenderCard card={cards[9]} />
      <RenderCard card={cards[10]} />
      <RenderCard card={cards[11]} />
    </div>
  );
};

export default Card;

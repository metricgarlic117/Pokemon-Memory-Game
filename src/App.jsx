import { useEffect, useState } from "react";
import Card from "./components/Card";

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    //swap
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getUniqueRandomInt(count, min, max) {
  const range = max - min + 1;
  if (count > range) {
    throw new Error("Count is larger than range of unique numbers");
  }

  const set = new Set();

  while (set.size < count) {
    const n = Math.floor(Math.random() * range) + min;
    set.add(n);
  }
  return [...set];
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        setLoading(true);

        // Pick random 10
        const ids = getUniqueRandomInt(10, 1, 30);

        const pokemonData = await Promise.all(
          ids.map(async (id) => {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${id}`,
            );
            const data = await response.json();

            return {
              id: data.id,
              name: capitalize(data.name),
              image: data.sprites?.front_default,
            };
          }),
        );
        const clean = pokemonData.filter((p) => p.image);
        setCards(clean);
      } catch (error) {
        console.log(`There is an error while fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchRandomPokemon();
  }, []);

  const shuffleCardsOnClick = () => {
    setCards((prevCards) => shuffleArray(prevCards));
  };

  return (
    <div>
      <h1>Pokemon Memory Game</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {cards.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              image={card.image}
              onClick={() => shuffleCardsOnClick()}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

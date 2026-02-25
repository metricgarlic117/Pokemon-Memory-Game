import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";

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
  const [memory, setMemory] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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

  useEffect(() => {
    console.log(memory);
  }, [memory]);

  useEffect(() => {
    if (score === 10) {
      window.alert("You Win!");
    }
  }, [score]);

  const handleCardsOnClick = (id) => {
    setMemory((prevMemory) => {
      const alreadyClicked = prevMemory.includes(id);

      if (alreadyClicked) {
        //lose
        setBestScore((prevBest) => Math.max(prevBest, score));
        setScore(0);
        setCards((prevCards) => shuffleArray(prevCards));
        window.alert("Sorry, you lose");
        return [];
      } else {
        //correct

        setScore((prevScore) => prevScore + 1);

        setCards((prevCards) => shuffleArray(prevCards));
        return [...prevMemory, id];
      }
    });
  };
  return (
    <div>
      <h1>Pokemon Memory Game</h1>

      <p>Current Score : {score}</p>
      <p>Highest Score : {bestScore}</p>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card_container">
          {cards.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              image={card.image}
              onClick={() => handleCardsOnClick(card.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

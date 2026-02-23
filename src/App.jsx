import { FlatESLint } from "eslint/use-at-your-own-risk";
import { useEffect } from "react";

function getUniqueRandomInts(count, min, max) {
  const set = new Set();
  while (set.size < count) {
    const n = Math.floor(Math.random() * max - min + 1) + min;
    set.add(n);
  }

  return [...set];
}

function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
const App = () => {
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        setLoading(true);

        // Pick random 10
        const ids = getUniqueRandomInts(10, 1, 40);

        const pokemonData = await Promise.all(
          ids.map(async (id) => {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${id}`,
            );
            const data = await response.json();

            return {
              id: data.id,
              name: capitalizeWord(data.name),
              image: data.sprites?.front_default,
            };
          }),
        );

        const clean = pokemonData.filter((p) => p.image);
        setCard(clean);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
  }, []);

  return <div></div>;
};

export default App;

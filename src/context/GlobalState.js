import { useState } from "react";

function GlobalState() {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [modalCapture, setModalCapture] = useState(false);

  const capture = (pokemon) => {
    const exists = pokedex.some((item) => item.name === pokemon.name);

    if (exists) {
      return;
    }

    setModalCapture(true);
    setPokedex([...pokedex, pokemon]);
  };

  const remove = () => {
    setModalCapture(true);
  };

  return {
    pokemons,
    pokedex,
    setPokemons,
    capture,
    modalCapture,
    setModalCapture,
    remove,
  };
}

export default GlobalState;

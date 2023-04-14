import { useState } from "react";

function GlobalState() {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [modalCapture, setModalCapture] = useState(false);

  const capture = (pokemon) => {
    const pokemonsFiltered = pokemons.filter(
      (item) => item.name !== pokemon.name
    );

    setModalCapture(true);
    setPokedex([...pokedex, pokemon]);
    setPokemons(pokemonsFiltered);
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

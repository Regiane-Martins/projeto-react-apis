import axios from "axios";
import { useEffect, useState } from "react";
import { attributes } from "../components/settings";

function GlobalState() {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [modalCapture, setModalCapture] = useState(false);
  const [modalExcluded, setModalExcluded] = useState(false);
  const [isInPokedex, setIsInPokedex] = useState(true);

  const capture = (pokemon) => {
    const pokemonsFiltered = pokemons.filter(
      (item) => item.name !== pokemon.name
    );

    setModalCapture(true);
    setPokedex([...pokedex, pokemon]);
    setPokemons(pokemonsFiltered);

    setTimeout(() => {
      setModalCapture(false);
    }, 2000);
  };

  const remove = (pokemon) => {
    const excludedPokemons = pokedex.filter(
      (item) => item.name !== pokemon.name
    );

    setModalExcluded(true);
    setPokedex(excludedPokemons);
    setPokemons([...pokemons, pokemon]);

    setTimeout(() => {
      setModalExcluded(false);
    }, 2000);
  };

  return {
    pokemons,
    pokedex,
    setPokemons,
    capture,
    modalCapture,
    modalExcluded,
    setModalCapture,
    remove,
    isInPokedex,
    setIsInPokedex

  };
}

export default GlobalState;

import PokemonCard from "../../components/pokemon-card";
import * as s from "./styled";
import axios from "axios";
import { useEffect } from "react";

function ListPokemons(props) {
  const { pokemon, setPokemon } = props;

  const rendPokemon = async () => {
    try {
      const real = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
      setPokemon(real.data.results);
    } catch (error) {}
  };

  useEffect(() => {
    rendPokemon();
  }, []);

  return (
    <s.Section>
      <s.Title>Todos Pokémons</s.Title>
      <s.Content>
        {pokemon.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </s.Content>
    </s.Section>
  );
}

export default ListPokemons;

import PokemonCard from "../../components/pokemon-card";
import { BASE_URL } from "../../constants/BASE_URL";
import * as s from "./styled";
import axios from "axios";
import { useEffect } from "react";

function ListPokemons(props) {
  const { pokemon, setPokemon } = props;

  const rendPokemon = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setPokemon(res.data.results);
    } catch (error) {
      alert(error.response);
    }
  };

  useEffect(() => {
    rendPokemon();
  }, []);

  return (
    <s.Section>
      <s.Title>Todos Pokémons</s.Title>
      <s.Content>
        {pokemon.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </s.Content>
    </s.Section>
  );
}

export default ListPokemons;

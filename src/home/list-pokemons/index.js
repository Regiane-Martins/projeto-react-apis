import PokemonCard from "../../components/pokemon-card";
import * as s from "./styled";

function ListPokemons() {
  return (
    <s.Section>
      <s.Title>Todos Pokémons</s.Title>
      <PokemonCard/>

    </s.Section>
  );
}

export default ListPokemons;

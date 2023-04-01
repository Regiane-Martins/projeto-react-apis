import PokemonCard from "../../components/pokemon-card";
import * as s from "./styled";

function ListPokemons() {
  return (
    <s.Section>
      <s.Title>Todos Pokémons</s.Title>
      <s.Content>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </s.Content>
    </s.Section>
  );
}

export default ListPokemons;

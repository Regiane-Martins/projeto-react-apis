import Header from "../../components/header";
import * as s from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import PokemonCard from "../../components/pokemon-card";

function List() {
  const context = useContext(GlobalContext);
  console.log(context);
  const renderPokemonCaptured =
    context.pokedex &&
    context.pokedex.map((pokemon, id) => (
      <PokemonCard key={id} pokemon={pokemon} />
    ));

  return (
    <>
      <Header />
      <s.Section>{renderPokemonCaptured}</s.Section>
    </>
  );
}

export default List;

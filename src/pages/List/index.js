import Header from "../../components/header";
import * as s from "./styled";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import PokemonCard from "../../components/pokemon-card";
import { Container } from "../../components/container";
import ModalExcluded from "../../components/modalExcluded";

function List() {
  const context = useContext(GlobalContext);
  console.log(context);
  const renderPokemonCaptured =
    context.pokedex &&
    context.pokedex.map((pokemon) => (
      <PokemonCard key={pokemon.name} pokemon={pokemon} />
    ));

  return (
    <>
      <Header />
      <s.Section>
        <Container>
          <s.Title>Meus Pokémons</s.Title>
          <s.Content>{renderPokemonCaptured}</s.Content>
          {context.modalExcluded && <ModalExcluded />}
        </Container>
      </s.Section>
    </>
  );
}

export default List;

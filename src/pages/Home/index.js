import { useEffect } from "react";
import PokemonCard from "../../components/pokemon-card";
import Header from "../../components/header";
import * as s from "./styled";
import { BASE_URL } from "../../constant/BASE_URL";
import axios from "axios";
import { Container } from "../../components/container";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ModalCapture from "../../components/modal-capture";

function Home() {
  const context = useContext(GlobalContext);

  const renderPokemon = context.pokemons.map((pokemon) => (
    <PokemonCard key={pokemon.name} pokemon={pokemon} />
  ));

  const renderPokemons = async () => {
    try {
      const res = await axios.get(BASE_URL);
      context.setPokemons(res.data.results);
    } catch (error) {
      alert(error.response);
    }
  };

  useEffect(() => {
    renderPokemons();
  }, []);

  return (
    <>
      <Header />
      <s.Section>
        <Container>
          <s.Title>Todos Pokémons</s.Title>
          <s.Content>{renderPokemon}</s.Content>
          {context.modalCapture && <ModalCapture />}
        </Container>
      </s.Section>
    </>
  );
}

export default Home;

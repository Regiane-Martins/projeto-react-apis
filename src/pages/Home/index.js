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

  const renderPokemon = context.pokemons
    .sort((a, b) => a.id - b.id)
    .map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />);

  const renderPokemons = async () => {
    try {
      const res = await axios.get(BASE_URL);
      const pokemons = res.data.results.map(({ name, url }) => {
        const match = url.match(/[^/]+(?=\/$|$)/);

        return {
          id: Number(match[0]),
          name,
          url,
        };
      });

      context.setPokemons(pokemons);
    } catch (error) {
      alert(error.response);
    }
  };

  useEffect(() => {
    if (context.pokemons.length > 0) {
      return;
    }

    renderPokemons();
  });

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

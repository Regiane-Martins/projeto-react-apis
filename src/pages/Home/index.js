import { useEffect, useState } from "react";
import PokemonCard from "../../components/pokemon-card";
import Header from "../../components/header";
import * as s from "./styled";
import { BASE_URL } from "../../constant/BASE_URL";
import axios from "axios";
import Loading from "../../components/Loading";
import { useResquestData } from "../../components/hooks/useRequestData";
import { Container } from "../../components/container";

function Home() {
  const [pokemon, setPokemon] = useState([]);

  /* const [pokemon, isLoading] = useResquestData(`${BASE_URL}`, []); */

  const renderPokemon = pokemon.map((pokemon, index) => (
    <PokemonCard key={index} pokemon={pokemon} />
  ));

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
    <>
      <Header />
      <s.Section>
      <Container>
        <s.Title>Todos Pokémons</s.Title>
        <s.Content>
          {renderPokemon}
          {/*  {isLoading && <Loading />}
          {!isLoading && pokemon && pokemon.length > 0 && renderPokemon} */}
        </s.Content>
      </Container>
      </s.Section>
    </>
  );
}

export default Home;

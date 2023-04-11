import { useEffect, useState } from "react";
import PokemonCard from "../../components/pokemon-card";
import Header from "../../components/header";
import * as s from "./styled";
import { BASE_URL } from "../../constant/BASE_URL";
import axios from "axios";

function Home() {
  const [pokemon, setPokemon] = useState([]);

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
        <s.Title>Todos Pokémons</s.Title>
        <s.Content>
          {pokemon.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
          ))}
        </s.Content>
      </s.Section>
    </>
  );
}

export default Home;

import Header from "../components/header";
import ListPokemons from "../home/list-pokemons";

function Home(props) {
  const { pokemon, setPokemon } = props;
  return (
    <>
      <Header />
      <ListPokemons pokemon={pokemon} setPokemon={setPokemon} />
    </>
  );
}

export default Home;

import { useState } from "react";
import Home from "./home";

function App() {
  const [pokemon, setPokemon] = useState([]);
  return (
    <>
      <Home pokemon={pokemon} setPokemon={setPokemon} />
    </>
  );
}

export default App;

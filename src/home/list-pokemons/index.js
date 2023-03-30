import * as s from "./styled";

function ListPokemons() {
  return (
    <s.Section>
      <img src={process.env.PUBLIC_URL + "/img/Group 1.svg"} alt="Pokémon" />

      <img src={process.env.PUBLIC_URL + "/img/Group 2.svg"} alt="Pokémon" />

      <img src={process.env.PUBLIC_URL + "/img/Group 3.svg"} alt="Pokémon" />

      <img src={process.env.PUBLIC_URL + "/img/Group 5.svg"} alt="Pokémon" />
      <img src={process.env.PUBLIC_URL + "/img/Group 6.svg"} alt="Pokémon" />
    </s.Section>
  );
}

export default ListPokemons;

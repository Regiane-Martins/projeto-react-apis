import * as s from "./styled";

function Header() {
  return (
    <s.HeaderContent>
      <s.Section>
        <s.Logo
          src={process.env.PUBLIC_URL + "/img/logo.svg"}
          alt="logo Pokémon"
        />
        <s.ButtonCart>Pokédex</s.ButtonCart>
      </s.Section>
    </s.HeaderContent>
  );
}

export default Header;

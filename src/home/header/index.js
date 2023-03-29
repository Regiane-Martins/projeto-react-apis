import * as s from "./styled";

function Header() {
  return (
    <s.Section>
      <s.Logo
        src={process.env.PUBLIC_URL + "/img/logo.svg"}
        alt="logo Pokémon"
      />
      <s.ButtonCart>Pokédex</s.ButtonCart>
      <s.MenuMobile src={process.env.PUBLIC_URL + "/img/menu-hamburger-blue.svg"} alt="menu mobile" />
    </s.Section>
  );
}

export default Header;

import * as s from "./styled";

function Header() {
  return (
    <s.HeaderContent>
      <s.Header>
        <s.Logo
          src={process.env.PUBLIC_URL + "/img/logo.svg"}
          alt="logo Pokémon"
        />
        <s.ButtonCart>Pokédex</s.ButtonCart>
      </s.Header> 

      {/* <s.Header>
        <s.ReturnPage>
          <s.ArrowIcon
            src={process.env.PUBLIC_URL + "/img/arrow.svg"}
            alt="seta esquerda"
          />
          <s.Link href="/">Todos Pokémons</s.Link>
          <s.Home href="/">
            <s.HomeIcon
              src={process.env.PUBLIC_URL + "/img/home.svg"}
              alt="home"
            />
          </s.Home>
        </s.ReturnPage>
        <s.Logo
          src={process.env.PUBLIC_URL + "/img/logo.svg"}
          alt="logo Pokémon"
        />
      </s.Header>
 */}
      {/* <s.Header>
        <s.ReturnPage>
          <img
            src={process.env.PUBLIC_URL + "/img/arrow.svg"}
            alt="seta esquerda"
          />
          <s.Link href="/">Todos Pokémons</s.Link>
        </s.ReturnPage>
        <s.Logo
          src={process.env.PUBLIC_URL + "/img/logo.svg"}
          alt="logo Pokémon"
        />
        <s.DeletePokemon>Excluir da Pokédex</s.DeletePokemon>
      </s.Header> */}
    </s.HeaderContent>
  );
}

export default Header;

import { useNavigate, useLocation } from "react-router-dom";
import * as s from "./styled";
import { goToHome, goToList } from "../routes/coordenatior";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <s.HeaderContent>
          <s.Header>
            <s.headerSection></s.headerSection>
            <s.headerSection>
              {" "}
              <s.Logo
                src={process.env.PUBLIC_URL + "/img/logo.svg"}
                alt="logo Pokémon"
              />
            </s.headerSection>
            <s.headerSection>
              {" "}
              <s.ButtonCart onClick={() => goToList(navigate)}>
                Pokédex
              </s.ButtonCart>
            </s.headerSection>
          </s.Header>
        </s.HeaderContent>
      ) : location.pathname === "/list" ? (
        <s.HeaderContent>
          <s.Header>
            <s.headerSection></s.headerSection>
            <s.headerSection>
              <s.ReturnPage>
                <s.ArrowIcon
                  src={process.env.PUBLIC_URL + "/img/arrow.svg"}
                  alt="seta esquerda"
                />
                <s.Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    goToHome(navigate);
                  }}
                >
                  Todos Pokémons
                </s.Link>
                <s.Home href="/">
                  <s.HomeIcon
                    src={process.env.PUBLIC_URL + "/img/home.svg"}
                    alt="home"
                  />
                </s.Home>
              </s.ReturnPage>
            </s.headerSection>
            <s.headerSection>
              <s.Logo
                src={process.env.PUBLIC_URL + "/img/logo.svg"}
                alt="logo Pokémon"
              />
            </s.headerSection>
          </s.Header>
        </s.HeaderContent>
      ) : (
        <s.HeaderContent>
          <s.Header>
            <s.headerSection></s.headerSection>
            <s.headerSection>
              <s.ReturnPage>
                <s.ArrowIcon
                  src={process.env.PUBLIC_URL + "/img/arrow.svg"}
                  alt="seta esquerda"
                />
                <s.HomeIcon
                  src={process.env.PUBLIC_URL + "/img/home.svg"}
                  alt="home"
                />
                <s.Link href="/" onClick={() => goToHome(navigate)}>
                  Todos Pokémons
                </s.Link>
              </s.ReturnPage>
              <s.Logo
                src={process.env.PUBLIC_URL + "/img/logo.svg"}
                alt="logo Pokémon"
              />
            </s.headerSection>
            <s.headerSection>
              <s.DeletePokemon>Excluir da Pokédex</s.DeletePokemon>
            </s.headerSection>
          </s.Header>
        </s.HeaderContent>
      )}
    </>
  );
}

export default Header;

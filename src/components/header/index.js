import { useNavigate, useLocation } from "react-router-dom";
import * as s from "./styled";
import { goToHome, goToList } from "../routes/coordenatior";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import ModalCapture from "../modal-capture";
import ModalExcluded from "../modalExcluded";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(GlobalContext);
  const {
    capture,
    remove,
    modalCapture,
    modalExcluded,
    detailedPokemon,
    pokedex,
  } = context;

  function isDetailedPokemonInPokedex() {
    return pokedex.find((item) => item.name === detailedPokemon.name);
  }

  return (
    <>
      {location.pathname === "/" ? (
        <s.HeaderContent>
          <s.Header>
            <s.headerSection></s.headerSection>
            <s.headerSection>
              <s.Logo
                src={process.env.PUBLIC_URL + "/img/logo.svg"}
                alt="logo Pokémon"
              />
            </s.headerSection>
            <s.headerSection>
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
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goToHome(navigate);
                  }}
                >
                  Todos Pokémons
                </s.Link>
                <s.Home
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goToHome(navigate);
                  }}
                >
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
                <s.Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goToHome(navigate);
                  }}
                >
                  Todos Pokémons
                </s.Link>
              </s.ReturnPage>
              <s.Logo
                src={process.env.PUBLIC_URL + "/img/logo.svg"}
                alt="logo Pokémon"
              />
            </s.headerSection>
            <s.headerSection>
              {isDetailedPokemonInPokedex() ? (
                <s.DeleteAndCapturePokemon
                  onClick={() => remove(detailedPokemon)}
                >
                  Excluir da Pokédex
                </s.DeleteAndCapturePokemon>
              ) : (
                <s.DeleteAndCapturePokemon
                  onClick={() => capture(detailedPokemon)}
                >
                  Capturar
                </s.DeleteAndCapturePokemon>
              )}
              {modalExcluded && <ModalExcluded />}
              {modalCapture && <ModalCapture />}
            </s.headerSection>
          </s.Header>
        </s.HeaderContent>
      )}
    </>
  );
}

export default Header;

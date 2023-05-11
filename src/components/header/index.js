import { useNavigate, useLocation } from "react-router-dom";
import * as s from "./styled";
import { goToHome, goToList } from "../../routes/coordenatior";
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

  const returnPage = (
    <s.ReturnPage>
      <s.ArrowIcon
        src={process.env.PUBLIC_URL + "/img/arrow.svg"}
        alt="seta esquerda"
      />
      <s.Link onClick={() => goToHome(navigate)}>
        <s.SpanDesktop>Todos Pokémons</s.SpanDesktop>
        <s.Span>Todos</s.Span>
        <s.Span>Pokémons</s.Span>
      </s.Link>
    </s.ReturnPage>
  );

  const logo = (
    <s.Logo src={process.env.PUBLIC_URL + "/img/logo.svg"} alt="logo Pokémon" />
  );

  const pokedexButton = (
    <s.ButtonCart onClick={() => goToList(navigate)}>Pokédex</s.ButtonCart>
  );

  const captureButton = (
    <s.DeleteAndCapturePokemon onClick={() => capture(detailedPokemon)}>
      Capturar
    </s.DeleteAndCapturePokemon>
  );

  const removeButton = (
    <s.DeleteAndCapturePokemon onClick={() => remove(detailedPokemon)}>
      Excluir da Pokédex
    </s.DeleteAndCapturePokemon>
  );

  return (
    <>
      <s.HeaderContent>
        <s.Header>
          <s.headerSection></s.headerSection>
          <s.headerSection>{logo}</s.headerSection>
          <s.headerSection>
            {location.pathname === "/" && pokedexButton}
            {location.pathname === "/list" && returnPage}
            {location.pathname !== "/" && location.pathname !== "/list" && (
              <>
                {returnPage}
                {isDetailedPokemonInPokedex() ? removeButton : captureButton}
                {modalExcluded && <ModalExcluded />}
                {modalCapture && <ModalCapture />}
              </>
            )}
          </s.headerSection>
        </s.Header>
      </s.HeaderContent>
    </>
  );
}

export default Header;

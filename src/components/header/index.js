import { useNavigate } from "react-router-dom";
import * as s from "./styled";
import { goToHome, goToList } from "../routes/coordenatior";

function Header() {
  const navigate = useNavigate();
  /* const [screen, setScreen] = useState('') */

  return (
    <s.HeaderContent>
      <s.Header>
        <s.Logo
          src={process.env.PUBLIC_URL + "/img/logo.svg"}
          alt="logo Pokémon"
        />
        <s.ButtonCart onClick={() => goToList(navigate)}>Pokédex</s.ButtonCart>
      </s.Header>

      <s.Header>
        <s.ReturnPage>
          <s.ArrowIcon
            src={process.env.PUBLIC_URL + "/img/arrow.svg"}
            alt="seta esquerda"
          />
          <s.Link href="/" onClick={() => goToHome(navigate)}>
            Todos Pokémons
          </s.Link>
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

      <s.Header>
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
        <s.DeletePokemon>Excluir da Pokédex</s.DeletePokemon>
      </s.Header>
    </s.HeaderContent>
  );
}

export default Header;

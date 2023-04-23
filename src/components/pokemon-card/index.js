import axios from "axios";
import * as s from "./styled";
import { useEffect } from "react";
import { useState } from "react";
import { goToDetail } from "../routes/coordenatior";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { attributes } from "../settings";

function PokemonCard(props) {
  const context = useContext(GlobalContext);
  const { pokemon } = props;

  const [image, setImage] = useState("");
  const [id, setId] = useState("");
  const [types, setTypes] = useState([]);
  const [color, setColor] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const loadDetail = async () => {
    try {
      const res = await axios.get(pokemon.url);

      setImage(res.data.sprites.other["official-artwork"].front_default);
      setId(res.data.id);
      setTypes(res.data.types);

      const mainAttribute = attributes.find(
        (item) => item.type === res.data.types[0].type.name
      );

      setColor(mainAttribute.cardColor);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDetail();
  }, []);

  return (
    <>
      <s.Card color={color}>
        <s.Id>#{String(id).padStart(2, "0")}</s.Id>
        <s.Name>{pokemon.name}</s.Name>
        <s.Attribute>
          {!!types.length &&
            types.map((item, index) => {
              const attribute = attributes.find(
                (attribute) => attribute.type === item.type.name
              );

              return (
                <s.Type key={index} {...attribute}>
                  {item.type.name}
                </s.Type>
              );
            })}
        </s.Attribute>
        <s.Details>
          <s.Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              goToDetail(navigate);
            }}
          >
            Detalhes
          </s.Link>
          <s.ButtonContainer>
            {location.pathname === "/" ? (
              <s.Button onClick={() => context.capture(pokemon)}>
                Capturar!
              </s.Button>
            ) : (
              <s.ButtonDelete
                onClick={() => {
                  context.remove(pokemon);
                }}
              >
                Excluir
              </s.ButtonDelete>
            )}
          </s.ButtonContainer>
        </s.Details>
        <s.PokemonIcon src={image} alt="pokemon icon" />
      </s.Card>
    </>
  );
}

export default PokemonCard;

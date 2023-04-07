import axios from "axios";
import * as s from "./styled";
import { useEffect } from "react";
import { useState } from "react";

function PokemonCard(props) {
  const { pokemon } = props;
  const [image, setImage] = useState("");
  const [id, setId] = useState("");

  const loadingDetail = async () => {
    try {
      const res = await axios.get(pokemon.url);
      setImage(res.data.sprites.other["official-artwork"].front_default);
      setId(res.data.id);
    } catch (error) {}
  };

  useEffect(() => {
    loadingDetail();
  }, []);

  return (
    <>
      <s.Card>
        <s.Id>#{String(id).padStart(2, "0")}</s.Id>
        <s.Name>{pokemon.name}</s.Name>
        <s.Attribute>
          <s.Paison>Paison</s.Paison>
          <s.Grass>Grass</s.Grass>
        </s.Attribute>
        <s.Details>
          <s.Link href="/">Detalhes</s.Link>
          <s.ButtonContainer>
            <s.Button>Capturar!</s.Button>
          </s.ButtonContainer>
        </s.Details>
        <s.Background
          src={process.env.PUBLIC_URL + "/img/pngwing 2.svg"}
          alt="logo Pokémon"
        />
        <s.PokemonIcon src={image} alt="pokemon icon" />
      </s.Card>
    </>
  );
}

export default PokemonCard;

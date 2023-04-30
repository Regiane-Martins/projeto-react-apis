import { Container } from "../../components/container";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import * as s from "./styled";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constant/BASE_URL";
import axios from "axios";
import { attributes } from "../../components/settings";

function Detail() {
  const params = useParams();
  const [imageBack, setImageBack] = useState("");
  const [imageFront, setImageFront] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [types, setTypes] = useState([]);
  const [imageMain, setImageMain] = useState("");
  const [moves, setMoves] = useState([]);
  const [baseStats, setBaseStats] = useState([]);
  /* const [color, setColor] = useState(""); */

  const total = baseStats.reduce((a, b) => a + b.base_stat, 0);

  const handleDetails = async (namePokemon) => {
    try {
      const res = await axios.get(`${BASE_URL}/` + namePokemon);
      console.log(res.data);
      setImageBack(res.data.sprites.back_default);
      setImageFront(res.data.sprites.front_default);
      setId(res.data.id);
      setName(res.data.forms[0].name);
      setTypes(res.data.types);
      setImageMain(res.data.sprites.other["official-artwork"].front_default);
      setMoves(res.data.moves.slice(0, 4));
      setBaseStats(res.data.stats);

      /*  const mainAttribute = attributes.find(
        (item) => item.type === res.data.types[0].type.name
      );
      setColor(mainAttribute.cardColor); */
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    handleDetails(params.namePokemon);
  }, []);

  const getStatName = (name) => {
    switch (name) {
      case "special-attack":
        return "sp. atk";
      case "special-defense":
        return "sp. def";
      default:
        return name;
    }
  };

  return (
    <>
      <Header />
      <s.Section>
        <Container>
          <s.Title>Detalhes</s.Title>
          <s.DetailCard>
            <s.ContentCard>
              <s.SeparatorImage>
                <s.ImageCard>
                  <s.Image src={imageFront} alt="imagem frontal" />
                </s.ImageCard>
                <s.ImageCard>
                  <s.Image src={imageBack} alt="imagem de costas" />
                </s.ImageCard>
              </s.SeparatorImage>
              <s.BaseCard>
                <s.TitleBase>Base stats</s.TitleBase>
                <s.ContentBase>
                  <s.Separator />
                  {baseStats.map((base) => {
                    return (
                      <s.Divider>
                        <s.SubTitleBase>
                          {getStatName(base.stat.name)}
                        </s.SubTitleBase>
                        <s.Points>{base.base_stat}</s.Points>
                        <s.Graphic>-------</s.Graphic>
                      </s.Divider>
                    );
                  })}
                  <s.Separator />
                  <s.Divider>
                    <s.SubTitleBase>Total</s.SubTitleBase>
                    <s.Total>{total}</s.Total>
                  </s.Divider>
                  <s.Separator />
                </s.ContentBase>
              </s.BaseCard>
              <s.DataPokemons>
                <s.Id>#{String(id).padStart(2, "0")}</s.Id>
                <s.Name>{name}</s.Name>
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
                <s.MovesCard>
                  <s.TitleMoves>Moves:</s.TitleMoves>
                  {moves.map((move) => (
                    <s.Moves key={move.name}>
                      <s.SubTitleMoves>{move.move.name}</s.SubTitleMoves>
                    </s.Moves>
                  ))}
                </s.MovesCard>
              </s.DataPokemons>
            </s.ContentCard>
            <s.PokemonIcon src={imageMain} />
          </s.DetailCard>
        </Container>
      </s.Section>
    </>
  );
}

export default Detail;

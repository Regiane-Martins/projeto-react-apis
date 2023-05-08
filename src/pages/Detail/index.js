import { Container } from "../../components/container";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import * as s from "./styled";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constant/BASE_URL";
import axios from "axios";
import { attributes } from "../../components/settings";
import { Fragment } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function Detail() {
  const context = useContext(GlobalContext);
  const params = useParams();

  const [imageBack, setImageBack] = useState("");
  const [imageFront, setImageFront] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [types, setTypes] = useState([]);
  const [imageMain, setImageMain] = useState("");
  const [moves, setMoves] = useState([]);
  const [baseStats, setBaseStats] = useState([]);
  const [color, setColor] = useState("");

  const total = baseStats.reduce((a, b) => a + b.base_stat, 0);

  useEffect(() => {
    async function handleDetails(namePokemon) {
      try {
        const res = await axios.get(`${BASE_URL}/` + namePokemon);

        context.setDetailedPokemon({
          id: res.data.id,
          name: res.data.forms[0].name,
          url: `${BASE_URL}/${res.data.id}`,
        });

        setImageBack(res.data.sprites.back_default);
        setImageFront(res.data.sprites.front_default);
        setId(res.data.id);
        setName(res.data.forms[0].name);
        setTypes(res.data.types);
        setImageMain(res.data.sprites.other["official-artwork"].front_default);
        setMoves(res.data.moves.slice(0, 4));
        setBaseStats(res.data.stats);

        const mainAttribute = attributes.find(
          (item) => item.type === res.data.types[0].type.name
        );

        setColor(mainAttribute.cardColor);
      } catch (error) {
        console.log(error.response);
      }
    }

    handleDetails(params.namePokemon);
  }, [params.namePokemon]);

  const getStatName = (name) => {
    switch (name) {
      case "special-attack":
        return "sp. atk";
      case "special-defense":
        return "sp. def";
      case "hp":
        return "HP";
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
          <s.DetailCard color={color}>
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
                  {baseStats.map((base) => {
                    return (
                      <Fragment key={base.stat.name}>
                        <s.Separator />
                        <s.Divider>
                          <s.SubTitleBase>
                            {getStatName(base.stat.name)}
                          </s.SubTitleBase>
                          <s.Points>{base.base_stat}</s.Points>
                          <s.Graphic base={Number(base.base_stat)}></s.Graphic>
                        </s.Divider>
                      </Fragment>
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
                    types.map((item) => {
                      const attribute = attributes.find(
                        (attribute) => attribute.type === item.type.name
                      );

                      return (
                        <s.Type key={item.type.name} {...attribute}>
                          {item.type.name}
                        </s.Type>
                      );
                    })}
                </s.Attribute>

                <s.MovesCard>
                  <s.TitleMoves>Moves:</s.TitleMoves>
                  {moves.map((move) => (
                    <s.Moves key={move.move.name}>
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

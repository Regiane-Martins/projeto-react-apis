import { Container } from "../../components/container";
import Header from "../../components/header";
import * as s from "./styled";

function Detail() {
  return (
    <>
      <Header />
      <Container>
        <s.DetailCard>
          <s.ContentCard>
            <s.SeparatorImage>
              <s.ImageCard>imagem frente</s.ImageCard>
              <s.ImageCard>imagem costas</s.ImageCard>
            </s.SeparatorImage>
            <s.BaseCard>
              <s.TitleBase>Base stats</s.TitleBase>
            </s.BaseCard>
            <s.DataPokemons>
              <s.Id>#id</s.Id>
              <s.Name>nome</s.Name>
              <s.Attribute>poderes</s.Attribute>
              <s.MovesCard>
                <s.TitleMoves>Moves:</s.TitleMoves>
                <s.Moves>oi</s.Moves>
                <s.Moves>oi</s.Moves>
                <s.Moves>oi</s.Moves>
                <s.Moves>oi</s.Moves>
              </s.MovesCard>
            </s.DataPokemons>
          </s.ContentCard>
        </s.DetailCard>
      </Container>
    </>
  );
}

export default Detail;

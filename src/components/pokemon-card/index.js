import * as s from "./styled";

function PokemonCard() {
  return (
    <>
      <s.Card>
        <s.Id>#id</s.Id>
        <s.Name>Nome</s.Name>
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
        <img />
      </s.Card>
    </>
  );
}

export default PokemonCard;

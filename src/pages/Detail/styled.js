import styled from "styled-components";

export const Section = styled.section`
  background-color: #8a8a8a;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3.438rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const DetailCard = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/img/pngwing3.svg);
  background-color: ${({ color }) => color};
  background-position: right center;
  background-repeat: no-repeat;
  border-radius: 37.89px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const PokemonIcon = styled.img`
  height: 270px;
  width: 270px;
  position: absolute;
  right: 2.196rem;
  top: -120px;
`;

export const ContentCard = styled.div`
  display: flex;
  gap: 34px 47px;
  padding: 25px 44px;
`;

export const SeparatorImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
`;

export const ImageCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
`;

export const Image = styled.img`
  height: 282px;
  width: 282px;
`;

export const Type = styled.button`
  background: url(${({ image }) => image}) no-repeat 10% center
    ${({ color }) => color};
  border: 1px dashed #fff;
  border-radius: 8px;
  color: #fff;
  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 400;
  padding: 5px 8px 5px 40px;
  text-align: right;

  :first-letter {
    text-transform: capitalize;
  }
`;

export const BaseCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 613px;
  padding: 18px;
  width: 343px;
`;

export const Separator = styled.hr`
  color: #000000;
  opacity: 0.1;
  width: 100%;
`;

export const ContentBase = styled.div`
  height: 80px;
`;

export const TitleBase = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const Divider = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  gap: 2rem;
  margin-bottom: 0.7rem;
`;

export const SubTitleBase = styled.p`
  font-size: 0.85rem;
  color: #000000;
  opacity: 0.7;
  text-transform: capitalize;
  text-align: right;
`;
export const Points = styled.span`
  color: #000000;
  opacity: 0.8;
  font-weight: 500;
`;

export const Graphic = styled.p`
  width: ${({ base }) => base}%;
  height: 12px;
  border-radius: 12px;
  background-color: ${({ base }) => (base <= 50 ? "#ff7c2e" : "#ffdd69")};
  text-align: left;
`;
export const Total = styled.p`
  color: #000000;
  opacity: 0.7;
  font-weight: 800;
`;

export const DataPokemons = styled.div`
  color: #fff;
  margin-left: 68px;
`;

export const Id = styled.p`
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
`;

export const Name = styled.p`
  font-family: "Inter";
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.563rem;
  :first-letter {
    text-transform: capitalize;
  }
`;

export const Attribute = styled.div`
  display: flex;
  gap: 0.313rem;
  margin-bottom: 4.188rem;
`;

export const MovesCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 453px;
  padding: 18px;
  width: 292px;
`;

export const TitleMoves = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const Moves = styled.div`
  align-items: center;
  background-color: #ececec;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  color: #000;
  display: flex;
  width: fit-content;
  height: auto;
  font-size: 0.875rem;
`;

export const SubTitleMoves = styled.p`
  padding: 10px;
  text-transform: capitalize;
`;

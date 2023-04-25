import styled from "styled-components";

export const DetailCard = styled.div`
  background: url(${process.env.PUBLIC_URL}/img/pngwing2.svg) no-repeat right
    #729f92;
  background-size: contain;
  border-radius: 37.89px;
  height: 663px;
  width: 1389.14px;
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
  height: 282px;
  width: 282px;
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

export const TitleBase = styled.p`
  font-size: 1.5rem;
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

export const Moves = styled.p`
  align-items: center;
  background-color: #ececec;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  color: #000;
  display: flex;
  justify-content: center;
  height: 37px;
  width: 102px;
`;

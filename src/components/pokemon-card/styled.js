import styled from "styled-components";

export const Card = styled.div`
  background: url(${process.env.PUBLIC_URL}/img/pngwing2.svg)
    ${({ color }) => color} no-repeat right;
  border-radius: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 210px;
  padding: 21px;
  position: relative;
  width: 440px;

  @media (max-width: 480px) {
    height: 205px;
    width: 400px;
  }
`;

export const Id = styled.p`
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
`;

export const Name = styled.p`
  font-family: "Inter";
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.625rem;
  :first-letter {
    text-transform: capitalize;
  }
`;

export const Attribute = styled.div`
  display: flex;
  gap: 0.313rem;
  margin-bottom: 2.2rem;
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

export const Details = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.a`
  color: #fff;
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 8px;
  color: #0f0f0f;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  height: 38px;
  width: 146px;
  padding: 4px 10px;
`;

export const ButtonDelete = styled.button`
  background-color: #ff6262;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  height: 38px;
  width: 146px;
  padding: 4px 10px;
`;

export const PokemonIcon = styled.img`
  height: 193px;
  width: 193px;
  position: absolute;
  right: 0;
  top: -50px;
`;

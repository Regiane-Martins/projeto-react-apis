import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.063rem;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #729f92;
  border-radius: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 210px;
  padding: 21px;
  position: relative;
  width: 440px;
`;

export const Id = styled.p`
  font-family: "Inter";
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
`;

export const Name = styled.p`
  font-family: "Inter";
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
`;

export const Attribute = styled.div`
  display: flex;
  gap: 0.313rem;
  margin-bottom: 2.2rem;
`;

export const Paison = styled.button`
  background-color: #ad61ae;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 400;
  height: 31px;
  padding: 5px, 8px;
  width: 99px;
`;

export const Grass = styled.button`
  background-color: #70b873;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 400;
  height: 31px;
  padding: 5px, 8px;
  width: 91px;
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
  font-size: 1rem;
  font-weight: 400;
  height: 38px;
  width: 146px;
  padding: 4px 10px;
`;

export const Background = styled.img`
  height: 210.73px;
  width: 210.73px;
  position: absolute;
  top: 3px;
  right: 0;
`;

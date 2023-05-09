import styled from "styled-components";

export const HeaderContent = styled.div`
  min-height: 168px;
  width: 100%;

  @media (max-width: 480px) {
    min-height: 100px;
  }
`;

export const Header = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  column-gap: 20px;
  padding: 4rem;
  position: relative;
`;

export const Logo = styled.img`
  height: auto;
  margin: 0 auto;
  max-width: 100%;
`;

export const ButtonCart = styled.button`
  background-color: #33a4f5;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  height: 74px;
  padding: 4px 10px;
  max-width: 100%;
  width: 287px;

  @media (max-width: 768px) {
    height: 60px;
    margin-left: auto;
    width: 150px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    height: 40px;
    margin-left: 5rem;
    width: 90px;
  }
`;

export const DeleteAndCapturePokemon = styled.button`
  background-color: #ff6262;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 400;
  height: 57px;
  margin-right: 1.313rem;
  padding: 4px 10px;
  position: absolute;
  right: 0;
  width: 226px;

  @media (max-width: 768px) {
    height: 60px;
    margin-right: 2rem;
    width: 150px;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 0.75rem;
    margin-right: 0.75rem;
    padding: 0.3rem;
    width: 100px;
  }
`;

export const ReturnPage = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 0.644rem;
  position: absolute;
  left: 5.146rem;

  @media (max-width: 768px) {
    left: 2rem;
  }

  @media (max-width: 480px) {
    gap: 0.3rem;
    left: 1.5rem;
  }
`;

export const ArrowIcon = styled.img`
  @media (max-width: 480px) {
    left: 1rem;
  }
`;

export const Span = styled.span`
  display: none;
  @media (max-width: 480px) {
    display: block;
    line-height: 1.5;
    text-align: center;
  }
`;

export const SpanDesktop = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Link = styled.a`
  color: #1a1a1a;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const Home = styled.a`
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 480px) {
    align-items: center;
    display: block;
  }
`;

export const HomeIcon = styled.img`
  display: none;
  @media (max-width: 480px) {
    left: 0.75rem;
    display: block;
    cursor: pointer;
    height: auto;
    width: 40px;
  }
`;

export const headerSection = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
  align-items: center;
  align-content: center;
  width: 33%;
`;

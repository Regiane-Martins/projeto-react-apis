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
  justify-content: center;
  padding: 4rem;
  position: relative;
`;

export const Logo = styled.img`
  height: auto;
  margin: 0 auto;
  width: 307px;
  padding-top: 21px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    width: 180px;
    top: 30%;
  }
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
  margin-right: 1.313rem;
  padding: 4px 10px;
  position: absolute;
  top: 40%;
  right: 0;
  width: 287px;

  @media (max-width: 768px) {
    height: 60px;
    margin-right: 2rem;
    width: 150px;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 0.9rem;
    margin-right: 0.75rem;
    width: 100px;
  }
`;

export const DeletePokemon = styled.button`
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
  width: 226px;

  @media (max-width: 768px) {
    height: 60px;
    margin-right: 2rem;
    width: 150px;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 0.75rem;
    margin: 1.8rem 0.75rem 0 0;
    padding: 0.2rem;
    width: 100px;
  }
`;

export const ReturnPage = styled.div`
  align-items: center;
  display: flex;
  gap: 0.644rem;
  padding: 3.875rem 5rem;

  @media (max-width: 768px) {
    padding-left: 2rem;
  }

  @media (max-width: 480px) {
    padding-left: 1rem;
  }
`;

export const ArrowIcon = styled.img`
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Link = styled.a`
  color: #1a1a1a;
  font-family: "Poppins";
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    display: none;
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
    cursor: pointer;
    height: auto;
  }
`;

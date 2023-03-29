import styled from "styled-components";

export const Section = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding-top: 21px;
`;

export const Logo = styled.img`
  height: auto;
  margin: 0 auto;
  width: 307px;

  @media (max-width: 768px) {
    width: 230px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

export const ButtonCart = styled.button`
  background-color: #33a4f5;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  height: 74px;
  margin-right: 1.313rem;
  padding: 4px 10px;
  width: 287px;

  @media (max-width: 768px) {
    height: 60px;
    width: 180px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const MenuMobile = styled.img`
  display: none;

  @media (max-width: 480px) {
    display: block;
    height: auto;
    margin-right: 2rem;
    width: 50px;
  }
`;

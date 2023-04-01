import styled from "styled-components";

export const Section = styled.section`
  background-color: #8a8a8a;
  padding: 40px 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.063rem;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  padding: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
`;

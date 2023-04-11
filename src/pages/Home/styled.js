import styled from "styled-components";

export const Section = styled.section`
  background-color: #8a8a8a;
  display: flex;
  /* justify-content: center; */
  /* padding: 70px 25px; */
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.313rem 1.25rem;
  justify-content: center;
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

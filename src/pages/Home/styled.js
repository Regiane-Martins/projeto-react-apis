import styled from "styled-components";

export const Section = styled.section`
  background-color: #8a8a8a;
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

export const ContainerViewMore = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
`;

export const ViewMore = styled.button`
  align-items: center;
  background-color: #6a6a6a;
  border: none;
  border-radius: 12px;
  color: #cecece;
  cursor: pointer;
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 700;
  height: auto;
  padding: 7px 11px;
  text-transform: lowercase;
  text-align: center;
  width: 300px;
`;

export const MoreIcon = styled.img``;

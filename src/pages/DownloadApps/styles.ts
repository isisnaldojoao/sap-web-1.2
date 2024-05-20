import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 182px 32px 24px;
  
  @media (min-width: 640px) {
    padding: 88px 32px 24px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 48px;
  margin-bottom: 49px;
`;

export const ContainerCards = styled.div`
  display: grid;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, min-content));
  }
`;

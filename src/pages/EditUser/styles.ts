import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 182px 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 49px;
  
  @media (min-width: 640px) {
    padding: 88px 32px 24px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  line-height: 48px;
`;

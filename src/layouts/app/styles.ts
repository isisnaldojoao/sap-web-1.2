import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const Main = styled.main<{ $isOpen: boolean }>`
  margin-left: ${(props) => (props.$isOpen ? '358px' : '0')};
  transition: margin-left 0.3s ease;
`;

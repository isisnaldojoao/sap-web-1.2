import styled from "styled-components";

export const Container = styled.div`
  width: 314px;
  height: 89px;
  padding: 23px 25px;
  border-radius: 15px;
  font-family: "Poppins";
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 0px #00000040;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

export const IconApp = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 10px;
`;

export const ContainerElements = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextMain = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 17px;
  text-align: left;
`;

export const TextSecondary = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  text-align: left;
  margin-top: 10px;
`;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  top: 0;
  width: 358px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 39px 23px 28px;
  color: white;
  background: #86a693;
`;

export const ContainerTop = styled.div`
  flex: 1;
`

export const ContainerCloseNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
`;

export const ButtonCloseNavbar = styled.button`
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: 8px;
  background-color: #4b574e;

  &:hover {
    background-color: #5c7e63;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

export const IconCloseNavbar = styled.img`
  width: 17.33px;
  height: 17.33px;
  display: flex;
  margin-left: 4px;
`;

export const Logo = styled.img`
  width: 110px;
  height: 55px;
`;

export const ContainerCardUser = styled.div`
  width: 100%;
  margin-bottom: 45px;
`;

export const UserText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 13px;
`;

export const DivMenu = styled.div`
`;

export const GroupButton = styled.div`
  width: 100%;
`;

export const ButtonMenu = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  height: 48px;
  padding: 15px;
  gap: 10px;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: row;
  text-align: center;

  &:hover {
    background-color: #4b574e;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  &.active {
    background-color: #4b574e;
  }
`;

export const TextButton = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: start;
`;

export const IconsMenu = styled.img`
  width: 18px;
  height: 18px;
`;

export const ButtonExit = styled.button`
  width: 100%;
  height: 48px;
  padding: 0px 15px;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TextButtonExit = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const IconButtonExit = styled.img`
  width: 18px;
  height: 18px;
`;

export const OpenNavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  padding: 40px 23px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  @media (min-width: 640px) {
    width: fit-content;
    height: 100%;
    align-items: flex-start;
    padding: 45px 23px;
  }
`

export const Logo2 = styled.img`
  width: 110px;
  height: 55px;

  @media (min-width: 640px) {
    display: none;
  }
`;

export const ButtonOpenNavbar = styled.button`
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: 8px;
  background-color: #4b574e;

  &:hover {
    background-color: #5c7e63;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

export const IconOpenNavbar = styled.img`
  width: 19.5px;
  height: 13px;
  margin-top: 6.5px;
  margin-left: 3.25px;
`;

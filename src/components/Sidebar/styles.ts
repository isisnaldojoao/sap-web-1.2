import styled from "styled-components";

export const Container = styled.div`
  background: #86a693;
  width: 358px;
  height: 100vh;
  font-family: "Poppins";
  color: white;
`;

export const ContainerCardUser = styled.div`
  margin-top: 40px;
  margin-left: 20px;
`;

export const ButtonCloseNavbar = styled.button`
  width: 44px;
  height: 44px;
  top: 44px;
  left: 280px;
  padding: 10px;
  gap: 7px;
  border-radius: 8px;
  background-color: #4b574e;
  position: fixed;
  border: none;
  cursor: pointer;
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
  top: 39px;
  left: 10px;
  margin-top: 30px;
  margin-left: 20px;
`;

export const UserText = styled.p`
  width: 61px;
  height: 18px;
  margin-top: 50px;
  margin-left: 23px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 20px;
`;

export const DivMenu = styled.div`
  width: 312px;
  height: 154px;
  top: 331px;
  left: 23px;
  gap: 5px;
  opacity: 0px;
`;

export const ButtonMenu = styled.button`
  width: 312px;
  height: 48px;
  padding: 15px;
  gap: 10px;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  text-align: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #4b574e;
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
  }
`;

export const TextButton = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-family: "Poppins";
  width: 217px;
  height: 24px;
  text-align: start;
`;

export const GroupButton = styled.div`
  width: 312px;
  height: 154px;
  margin-left: 23px;
  gap: 5px;
  margin-top: 10px;
`;

export const IconsMenu = styled.img`
  margin-left: 10px;
  width: 18px;
  height: 18px;
`;

export const ButtonExit = styled.button`
  width: 312px;
  height: 48px;
  top: 900px;
  left: 23px;
  padding: 0px 15px;
  gap: 10px;
  border-radius: 8px;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 30px;
  left: 20px;
  position: fixed;
`;

export const TextButtonExit = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-family: "Poppins";
  width: 312px;
  height: 48px;
  text-align: start;
`;

export const IconButtonExit = styled.img`
  margin-left: 10px;
  width: 18px;
  height: 18px;
`;

export const ButtonOpenNavbar = styled.button`
  width: 44px;
  height: 44px;
  margin-top: 45px;
  margin-left: 23px;
  padding: 10px;
  gap: 7px;
  border-radius: 8px;
  background-color: #4b574e;
  border: none;
  cursor: pointer;
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

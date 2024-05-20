import styled from "styled-components";

export const Container = styled.div`
  background: white;
  width: 90%;
  max-width: 516px;
  height: auto;
  border-radius: 20px;
  padding: 39px 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Poppins";
`;

export const ContainerCard = styled.form`
  width: 100%;
  height: auto;
  gap: 20px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 252px;
  height: auto;
  margin-bottom: 20px;
`;

export const ContainerTitles = styled.div`
  color: #344054;
  width: 100%;
  height: 51px;
  text-align: center;
`;

export const Title = styled.h3`
  color: #344054;
  text-align: center;
`;

export const SubTitle = styled.p`
  color: #344054;
  text-align: center;
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 436px;
  height: auto;
  gap: 20px;
`;

export const ContainerInputLabelGroup = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  `;

export const InputLabelGroup = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  color: #344054;
  align-self: flex-start;
  width: 100%;
  height: 21px;
  text-align: start;
`;

export const Input = styled.input`
  background: white;
  width: 100%;
  height: 48px;
  padding: 12px 44px 12px 16px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  font-family: "Poppins";
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const IconViewPassword = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 12px;
  right: 16px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonLogin = styled.button`
  background: #86a693;
  font-family: "Poppins";
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  width: 100%;
  max-width: 100%;
  height: 41px;
  padding: 10px 24px;
  gap: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #5c7e63;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

export const LinkAcess = styled.a`
  color: #1570ef;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    color: #1570ef;
    outline: none;
  }
`;

export const P = styled.p`
  margin-top: 20px;
  color: #344054;
  font-size: 0.75rem;
  line-height: 18px;
`;

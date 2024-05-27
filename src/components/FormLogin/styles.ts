import styled from "styled-components";

export const Container = styled.div`
  background: white;
  width: 90%;
  max-width: 516px;
  border-radius: 20px;
  padding: 39px 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;

  > img {
    width: 100%;
    max-width: 252px;
  }

  .container-title {
    h2 {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
    }

    span {
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    background: #86a693;
    font-size: 14px;
    font-weight: 600;
    color: white;
    width: 100%;
    height: 41px;
    padding: 10px 24px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
      background-color: #5c7e63;
      transform: scale(1.05);
    }

    &:focus {
      outline: none;
    }
  }

  span {
    font-size: 12px;
    line-height: 18px;

    a {
      color: #1570ef;
      text-decoration: none;
      cursor: pointer;

      &:focus {
        color: #1570ef;
        outline: none;
      }
    }
  }
`;

export const ContainerInputLabel= styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 7px;

  label {
    font-size: 14px;
    line-height: 21px;
    text-align: start;
  }

  input {
    width: 100%;
    height: 48px;
    padding: 0px 16px;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    font-size: 14px;
    line-height: 21px;
  }
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

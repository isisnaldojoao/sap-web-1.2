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

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  
  > div {
    display: grid;
    gap: 16px;
  }

  button {
    align-self: center;
    background: #86a693;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    width: fit-content;
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

  @media (min-width: 640px) {
    > div {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      .name {
        grid-column: span 2 / span 2;
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
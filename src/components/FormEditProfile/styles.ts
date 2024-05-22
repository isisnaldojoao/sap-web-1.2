import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  max-width: 969px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  padding-bottom: 28px;
  border-bottom: 1px solid #00000026;

  img {
    vertical-align: middle;
    width: 151px;
    height: 151px;
    border-radius: 50%;
    background-size: cover;
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      align-self: center;
      background: #86a693;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      color: white;
      width: fit-content;
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
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
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
    width: 100%;
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
    }

    button {
      width: fit-content;
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

  input, select {
    width: 100%;
    height: 48px;
    padding: 0px 16px;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    background-color: white;
    font-size: 14px;
    line-height: 21px;
  }
`;

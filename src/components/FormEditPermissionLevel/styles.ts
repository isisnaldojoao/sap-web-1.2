import styled from "styled-components";

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

    button {
      width: fit-content;
    }
  }
`;

export const ContainerInputLabel= styled.div`
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

  > div {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 4px;

    > div {
      display: flex;
      align-items: center;
      gap: 4px;

      input {
        height: min-content;
        width: min-content;
      }
    }
  }

  .error {
    align-self: flex-start;
    font-size: 14px;
    color: #ef4444;
  }
`;
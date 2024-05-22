import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalBody = styled.div`
  position: relative;
  background-color: white;
  width: 433px;
  border-radius: 15px;
  padding: 43px 32px;
  z-index: 100;

  button.close-modal {
    position: absolute;
    top: 19px;
    right: 20px;
    background: transparent;
    line-height: 0;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  
  > div {
    display: flex;
    flex-direction: column;
    gap: 26px;
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

  div.password {
    position: relative;
  }

  .error {
    align-self: flex-start;
    font-size: 14px;
    color: #ef4444;
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

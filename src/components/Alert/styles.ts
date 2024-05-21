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
`;

export const ModalBody = styled.div`
  position: relative;
  background-color: white;
  width: 433px;
  border-radius: 15px;
  padding: 43px 32px;
  text-align: center;

  button.close-modal {
    position: absolute;
    top: 19px;
    right: 20px;
    background: transparent;
    line-height: 0;
  }

  > img {
    width: 96px;
    height: 96px;
    margin: 32px 0 41px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 68px;
  }

  button.primary {
    background: #86a693;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    width: 100%;
    height: 41px;
    padding: 10px 24px;
    border-radius: 8px;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
      background-color: #5c7e63;
      transform: scale(1.05);
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body, input, textarea, button, select {
    font: 400 1rem "Poppins", sans-serif;
    color: #344054;
  }

  button {
    border: none;
    cursor: pointer;
  }

  input[type=password]::-ms-reveal, input[type=password]::-ms-clear {
    display: none;
  }
`;

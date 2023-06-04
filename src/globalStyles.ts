import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 1px;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #006d77;
    overflow-x: hidden;

}
`;
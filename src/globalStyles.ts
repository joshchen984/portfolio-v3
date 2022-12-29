import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body, html {
    padding:0;
    margin:0;
  }
`;

export default GlobalStyle;

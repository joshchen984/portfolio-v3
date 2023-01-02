import { createGlobalStyle } from 'styled-components';
import colors from './utils/colors';

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
  body {
    font-family: Work Sans;
    background-color: ${colors.background};
  }
  h1, h2, h3 {
    font-family: Poppins;
  }

  p {
    color: ${colors.text};
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${colors.text};
  }
`;

export default GlobalStyle;

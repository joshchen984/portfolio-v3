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
  }
  h1, h2 {
    font-family: Poppins;
  }

  p {
    color: ${colors.text};
    margin: 0;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import crypt from '../../images/cryptBack.jpg';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Arial', 'Segoe UI', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // background: rgb(23, 27, 38);
        background-image: url(${crypt});
        background-size: contain;
      }

      h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
  
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
        text-decoration: none;
    }
`
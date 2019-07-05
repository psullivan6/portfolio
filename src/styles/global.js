import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body,
  #___gatsby {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: bebas-neue,sans-serif;
    font-weight: 400;
    font-style: normal;

    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};

    *::selection {
      background: ${props => props.theme.textSelection};
    }

    *::-moz-selection {
      background: ${props => props.theme.textSelection};
    }
  }

  #___gatsby div {
    height: inherit;
    display: flex;
    flex-direction: column;
  }

  main {
    position: relative;
    background-color: ${props => props.theme.background};
  }
`

export default GlobalStyle;

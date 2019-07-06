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
  #___gatsby,
  #gatsby-focus-wrapper,
  .tl-edges,
  .tl-wrapper {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: bebas-neue,sans-serif;
    font-weight: 400;
    font-style: normal;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};

    *::selection {
      background: ${props => props.theme.colors.textSelection};
    }

    *::-moz-selection {
      background: ${props => props.theme.colors.textSelection};
    }
  }

  .tl-wrapper {
    display: flex;
    flex-direction: column;
  }

  main {
    position: relative;
    background-color: ${props => props.theme.background};
  }
`

export default GlobalStyle;

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
  #___gatsby > div {
    width: 100%;
    height: 100%;
  }

  body {
    padding: ${props => `${props.theme.space[4]}px`};
    /* font-family: 'DM Serif Text', serif; */
    font-family: bebas-neue,sans-serif;
    font-weight: 400;
    font-style: normal;

    color: ${ props => props.theme.text};
    background-color: ${ props => props.theme.background};
  }
`

export default GlobalStyle;

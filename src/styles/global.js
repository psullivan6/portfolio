import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    padding: ${props => `${props.theme.space[3]}px`};
    font-family: 'DM Serif Text', serif;
    color: ${ props => props.theme.text};
    background-color: ${ props => props.theme.background};
  }
`

export default GlobalStyle;

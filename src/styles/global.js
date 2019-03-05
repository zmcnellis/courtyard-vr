import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    font-family:
      ${props => props.theme.fonts.primary},
      ${props => props.theme.fonts.secondary};
  }
`

export default GlobalStyle

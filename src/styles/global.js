import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.background};
    font-family:
      ${props => props.theme.fonts.primary},
      ${props => props.theme.fonts.fallback};
  }

  .react-autosuggest__container {
    position: relative;
    width: 100%;
    margin-bottom: 16px;
  }

  .react-autosuggest__input {
    width: calc(100% - 40px);
    height: 30px;
    padding: 10px 20px;
    font-size: 16px;
    /* border: 1px solid #aaa; */
    border: none;
    border-radius: 2px;
    font-family:
      ${props => props.theme.fonts.primary},
      ${props => props.theme.fonts.fallback};
    ${props => props.theme.env === 'fp' && `
      padding-top: 12px;
    `}
  }

  .react-autosuggest__input::placeholder {
    font-family:
      ${props => props.theme.fonts.primary},
      ${props => props.theme.fonts.fallback};
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .react-autosuggest__suggestions-container {
    display: none;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 51px;
    width: 100%;
    border: none;
    background-color: #fff;
    font-weight: 300;
    font-size: 16px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 2;
    margin-bottom: 40px;

    ${props => props.theme.env === 'shs' && `
      font-size: 14px;
    `}
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;

    /* scroll autocomplete suggestions box */
    max-height: 192px;
    overflow-y: auto;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: #ddd;
  }
`

export default GlobalStyle

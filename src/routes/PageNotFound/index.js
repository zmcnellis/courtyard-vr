import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #fff !important;
    font-family: Arial, Helvetica, sans-serif !important;
  }
`

const PageNotFound = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <h1>Page Not Found</h1>
    </React.Fragment>
  )
}

export default PageNotFound
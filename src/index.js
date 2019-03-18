import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import { ThemeContext } from './utils/contexts'
import Routes from './routes'
import GlobalStyle from './styles/global'
import * as Data from './data'
import './index.css'

const ThemeData = Data[process.env.REACT_APP_THEME]

ReactDOM.render(
  <ThemeProvider theme={ThemeData.styles}>
    <ThemeContext.Provider value={ThemeData}>
      <Helmet>
        <title>{ThemeData.brand.name}</title>
        {ThemeData.brand.favicon && (
          <link
            rel='icon'
            type='image/x-icon'
            href={ThemeData.brand.favicon}
            sizes='64x64 32x32 24x24 16x16'
          />
        )}

      </Helmet>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeContext.Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

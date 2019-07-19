import './polyfills'

import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { BrowserRouter } from 'react-router-dom'
import PageAnalytics from 'react-router-ga'
import Routes from './routes'
import './index.css'

const analyticsId = 'UA-137462836-1' // production
// const analyticsId = 'UA-137462836-2' // staging
ReactGA.initialize(analyticsId)

ReactDOM.render(
  <BrowserRouter>
    <PageAnalytics id={analyticsId}>
      <Routes />
    </PageAnalytics>
  </BrowserRouter>,
  document.getElementById('root')
)

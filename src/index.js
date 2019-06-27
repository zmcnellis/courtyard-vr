import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { BrowserRouter } from 'react-router-dom'
import PageAnalytics from 'react-router-ga'
import Routes from './routes'
import './index.css'

// TODO: when releasing to production, replace with the following line:
// const analyticsId = 'UA-137462836-1'
const analyticsId = 'UA-137462836-2'
ReactGA.initialize(analyticsId, { debug: true })

ReactDOM.render(
  <BrowserRouter>
    <PageAnalytics id={analyticsId} debug>
      <Routes />
    </PageAnalytics>
  </BrowserRouter>,
  document.getElementById('root')
)

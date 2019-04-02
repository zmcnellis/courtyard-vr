import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Analytics from 'react-router-ga'
import Routes from './routes'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Analytics id='UA-137462836-1'>
      <Routes />
    </Analytics>
  </BrowserRouter>,
  document.getElementById('root')
)

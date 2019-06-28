import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import { ThemeContext } from '../utils/contexts'
import Home from './Home'
import Welcome from './Welcome'
import Video from './Video'
import ThankYou from './ThankYou'
import Location from './Location'
import Scene from './Scene'
import PageNotFound from './PageNotFound'
import GlobalStyle from '../styles/global'
import ThemeData from '../data/theme'

const withTheme = Component => {
  return props => {
    const env = props.match.params.env
    const theme = ThemeData[env]
    const { styles, brand } = theme

    return (
      <ThemeProvider theme={styles}>
        <ThemeContext.Provider value={theme}>
          <Helmet>
            <title>{brand.name}</title>
          </Helmet>
          <GlobalStyle />
          <Component {...props} env={env} />
        </ThemeContext.Provider>
      </ThemeProvider>
    )
  }
}

const Routes = () => (
  <Switch>
    <Route exact path='/:env(cy|ff|shs)' component={withTheme(Home)} />
    <Route path='/:env(cy|ff|shs)/welcome' component={withTheme(Welcome)} />
    <Route path='/:env(cy|ff|shs)/thankyou/video' component={withTheme(Video)} />
    <Route path='/:env(cy|ff|shs)/thankyou' component={withTheme(ThankYou)} />
    <Route path='/:env(cy|ff|shs)/location/:id' component={withTheme(Location)} />
    <Route path='/:env(cy|ff|shs)/scene/:id' component={withTheme(Scene)} />
    <Route component={PageNotFound} />
  </Switch>
)

export default Routes

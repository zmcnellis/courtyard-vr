import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Scene from './Scene'
import Location from './Location'
import PageNotFound from './PageNotFound'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/location/:id' component={Location} />
      <Route path='/scene/:id' component={Scene} />
      <Route exact path='/scene' component={Scene} />
      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes

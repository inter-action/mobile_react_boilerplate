import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { Demo } from './pages'

import Loadable from 'react-loadable'

// NOTE: splitted module shouldn't be export in other file, it should be the only entry that been imported in here
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "pagesHome" */ './pages/home').then(mod => mod.Home),
  loading: () => <div>Loading...</div>
})

const Menu = Loadable({
  loader: () => import(/* webpackChunkName: "pageMenu" */ './pages/menu').then(mod => mod.Menu),
  loading: () => <div>Loading...</div>
})

const Router = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/demo" component={Demo} />
    </div>
  </HashRouter>
)

export default Router

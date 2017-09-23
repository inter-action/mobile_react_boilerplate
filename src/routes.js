import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import { Home, Menu } from './pages'

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
    </div>
  </BrowserRouter>
)


export default Router 

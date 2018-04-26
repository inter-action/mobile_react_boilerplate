import React from 'react'
import { Provider } from 'mobx-react'
import Routes from './routes'
import { hot } from 'react-hot-loader'
import * as store from './store'

const App = () => {
  return (
    <Provider {...store}>
      <Routes />
    </Provider>
  )
}

export default hot(module)(App)

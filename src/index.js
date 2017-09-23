import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import Routes from './routes'
import * as store from './store'

let App = ()=>{
  return (
    <Provider {...store}>
      <Routes />
    </Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('.app'))



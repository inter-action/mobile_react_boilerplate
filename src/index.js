import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import Routes from './routes'
import * as store from './store'
import * as utils from './utils'

import 'normalize.css'
import './styles/global.scss'

let App = ()=>{
  return (
    <Provider {...store}>
      <Routes />
    </Provider>
  )
}


const setRem = ()=>{
  let docWidth = utils.dom.getDocWidth()
  if (docWidth > 1440){
    docWidth = 1440
  }
  document.documentElement.style.fontSize = docWidth/100 + 'px'
}

window.addEventListener('resize', setRem, false)

if (document.readyState === 'complete') {
  setRem()
} else {
  document.addEventListener('DOMContentLoaded', setRem, false);
}

window.addEventListener('DOMContentLoaded', ()=>{
  ReactDOM.render(<App />, document.querySelector('.app'))
})



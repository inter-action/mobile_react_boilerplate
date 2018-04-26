import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import 'normalize.css'
import './styles/global.scss'

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('.app'))
})

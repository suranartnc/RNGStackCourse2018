import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './app'

const container = document.getElementById('root')

const AppWithRouter = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.hydrate(AppWithRouter, container)

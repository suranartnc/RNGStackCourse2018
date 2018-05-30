import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './app'
import initializeStore from './modules/Blog/redux/store'

const container = document.getElementById('root')
const store = initializeStore(window.__PRELOADED_STATE__)

const AppWithRouter = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(AppWithRouter, container)

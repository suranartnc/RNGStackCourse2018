import 'isomorphic-unfetch'
import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './app'
import initializeStore from './modules/Blog/redux/store'

const port = 3000
const app = express()

app.listen(port)
app.use(express.static('public'))

app.get('*', async function(req, res) {
  const context = {}

  const store = initializeStore()

  const AppWithRouter = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )

  // Fetch initial data
  await store.dispatch({
    type: 'ENTRIES_FETCH',
    api: 'http://localhost:4000/posts'
  })

  const preloadedState = store.getState()

  const content = ReactDOM.renderToString(AppWithRouter)

  const html = `
    <html>
      <head>
        <title>RNG Stack Course 2018</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style>
          * {
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
          }
          html {
            font-size: 87.5%;
          }
          body {
            font-family: arial, 'sans-serif';
            font-size: 1em;
          }
        </style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script type="text/javascript">
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};
        </script>
        <script src="/build/client.bundle.js"></script>
      </body>
    </html>
  `

  res.send(html)
})

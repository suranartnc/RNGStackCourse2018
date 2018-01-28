import express from 'express'

import renderApp from './app'

const port = 3000
const app = express()

app.listen(port)
app.use(express.static('public'))

app.get('/', function(req, res) {
  const content = renderApp()

  const html = `
    <html>
      <head>
        <title>RNG Stack Course 2018</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/build/client.bundle.js"></script>
      </body>
    </html>
  `

  res.send(html)
})

import express from 'express'

import App from './app'

const port = 3000
const app = express()

app.listen(port)
app.use(express.static('dist'))

app.get('/', function (req, res) {
  const content = App

  const html = `
  <html>
    <head>
      <title>RNG Stack Course 2018</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/bundle.js"></script>
      </body>
    </html>
  `

  res.send(html)
})

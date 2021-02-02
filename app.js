const express = require('express');

const app = express();

app.get('/', (req, res)=> {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <h1>HELLO WORLD!!</h1>
      </body>
    </html>
  `)
})

module.exports = app;
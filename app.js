const express = require('express');
const { models: { Actor, Movie, Role }} = require('./db');

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

app.get('/api/movies', async(req, res, next)=> {
  try {
    res.send(await Movie.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/actors', async(req, res, next)=> {
  try {
    res.send(await Actor.findAll());
  }
  catch(ex){
    next(ex);
  }
});

module.exports = app;
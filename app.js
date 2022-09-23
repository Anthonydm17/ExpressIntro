const express = require('express')
const app = express()
const port = 3000
const favoriteMovieList = ["Harry Potter", "The Avengers"];

var moviesString = favoriteMovieList.toString();

app.get('/', (req, res) => {
  res.send('Anthony Martinez, 09/23/22')
})
app.get('/list-movies', (req, res) => {
    res.send(moviesString)
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
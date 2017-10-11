/**
 * Created by kerich on 10/10/17.
 */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()// spins up a server
app.use(morgan('combined'))// Prints out logs formatted a certain way
app.use(bodyParser.json())// Helps in parsing json data well
app.use(cors())// Needed when you want the server to be hosted on a different domain and allow it to be hit from anywhere in the world.

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.PORT || 8081)

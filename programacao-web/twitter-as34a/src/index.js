const express = require('express')
const app = express()
const port = 3000
const host = 'localhost'
const mongoose = require('mongoose')
const routes = require('./routes')

const mongoConfig =
  "mongodb://...";

mongoose.connect(
  mongoConfig,
  {
    useNewUrlParser: true
  }
)

app.use(express.json())
app.use(routes)

app.listen(port, host, () =>{
    console.log(`Servidor iniciado na porta ${port}`)
})
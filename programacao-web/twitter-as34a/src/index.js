const express = require('express')
const app = express()
const port = 9999
const host = 'localhost'
const mongoose = require('mongoose')
const routes = require('./routes')

const mongoConfig = "mongodb://localhost:27017/twitter";

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
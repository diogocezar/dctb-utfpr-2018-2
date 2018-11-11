const express = require('express')
const app = express()
const port = 9999
const mongoose = require('mongoose')
const routes = require('./routes')

const configMongo = "mongodb://localhost:27017/twitter";

mongoose.connect(
  configMongo,
  {
    useNewUrlParser: true
  }
)

app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
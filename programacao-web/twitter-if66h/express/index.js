const express = require('express')
const app = express()
const port = 9999

app.use((req, res, next) => {
    req.dado = 'Novo Teste'
    next()
})

app.get("/", (req, res) => {
  return res.send(`Principal ${req.dado}`);
})

app.get("/produtos", (req, res) => {
    return res.send("Produtos");
})

app.get('*', (req, res) => {
    return res.send('Rota não encontrada')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
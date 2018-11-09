const express = require('express')
const app = express()
const port = 9999

let dados = {
    countries: [
        'Brasil',
        'EUA',
        'Canadá',
        'Paraguay'
    ]
}

app.use(express.json())

app.use((req, res, next) => {
    req.dados = dados
    next()
})

app.get("/paises", (req, res) => {
    return res.json(req.dados)
})

app.post("/paises", (req, res) => {
    dados = {
        countries: [req.body.pais, ...dados.countries]
    }
    return res.json({ 'sucees' : true});
});

app.get('*', (req, res) => {
    return res.send('Rota não encontrada')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
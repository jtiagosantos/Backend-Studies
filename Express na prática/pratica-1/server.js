const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>"); //sim, é possível colocar tag html aqui
});

app.get('/:id/:name', (req, res) => {
    res.send({
        parametros: [
            req.params.id,
            req.params.name
        ],
        id: req.params.id,
        name: req.params.name
    });
});

app.listen(3000, () => console.log('Server Running!'));
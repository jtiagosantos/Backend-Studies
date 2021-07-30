const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
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
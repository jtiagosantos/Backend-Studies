const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/html/about.html");
});

app.listen(3000, () => console.log('Server Running!'));
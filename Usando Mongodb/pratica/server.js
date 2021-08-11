require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

const app = express();

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }) //boilerplate
    .then(() => {
        console.log('Successful connection with Mongodb!');
        app.emit('connected');
    })
    .catch(e => console.log(e));

const PORT = 8081;

app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('connected', () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
});

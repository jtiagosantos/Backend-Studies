require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');
const { checkCsrfError, generateCsrfToken } = require('./src/middlewares/index');

const app = express();

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }) //boilerplate
    .then(() => {
        console.log('Successful connection with Mongodb!');
        app.emit('connected');
    })
    .catch(e => console.log(e));

const PORT = 8081;

app.use(express.urlencoded({ extended: false }));
app.use(helmet());

//configuração da sessão
const sessionOptions = session({
    secret: 'Q8L6zpSKjjYpDAUU', //qualquer coisa
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // == 7 dias (tempo que os dados ficarão salvos na sessão)
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
app.use(checkCsrfError);
app.use(generateCsrfToken);

app.use(routes);

app.on('connected', () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
});

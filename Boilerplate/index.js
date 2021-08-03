/*
Boilerplate conexão do back-end com banco de dados MySQL

para instalar: yarn add sequelize / npm i sequelize

no código:
const Sequelize = require('sequelize');
const sequelize = new Sequelize('nomeDoBanco', 'usuário (ex: root)', 'senhaDoBanco', {
    host: 'hostDoBanco', //ex: localhost
    dialect: 'mysql'
});

//para testar a conexão
(async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

------------------------------------------------------------------------------

Boilerplate para permitir acesso à API (tornar pública)

para instalar: yarn add cors / npm i cors

no código:
const express = require('express');
const cors = require('cors');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    app.use(cors());
    next();
});

Rotas ...
.
.
.
*/
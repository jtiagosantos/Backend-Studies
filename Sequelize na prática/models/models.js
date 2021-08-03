const { Sequelize, sequelize } = require('../database');

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING //STRING tem limite de caracteres
    },
    conteudo: {
        type: Sequelize.TEXT //TEXT não possui limite de caracteres
    }
});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

//Usuario.sync(); //Para fazer a sincronização da tabela com o banco e criar a tabela.
                //Basta chamar apenas uma vez para criar a tabela e depois essa linha pode ser removida do código

module.exports = { Postagem, Usuario };
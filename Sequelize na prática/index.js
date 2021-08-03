const { Postagem, Usuario } = require('./models/models');

Postagem.create({
    titulo: "Um título qualquer",
    conteudo: "Um conteudo qualquer"
});

Usuario.create({
    nome: "Tiago",
    sobrenome: "Santos",
    idade: 19,
    email: "tiagosan040@gmail.com"
});
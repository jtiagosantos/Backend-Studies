const { inherits } = require('util'); //método que permite a uma classe herda métodos de uma outra classe
const { EventEmitter } = require('events');

function Character(name) {
    this.name = name;
};

inherits(Character, EventEmitter); //a classe Character herda os métodos da classe EventEmitter

const chapolin = new Character("Chapolin");

chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`));

console.log("Oh! E agora, quem poderá me defender?");

chapolin.emit('help');
const { EventEmitter } = require('events');

const ev = new EventEmitter();

ev.on('saySomething', () => { //fica ouvindo os eventos. Nesse caso, fica ouvindo os eventos até ele ser 'saySomething'
    console.log("Ouvi o seu evento")
});

ev.emit('saySomething'); //emitindo evento


ev.on('greeting', name => {
    console.log(`Olá ${name}, tudo bem?`);
});

ev.emit('greeting', "Mayk");

ev.once('welcomeEvent', name => { //o método once, diferente do on(que ouve sempre), ouve apenas uma única vez
    console.log(`Welcome, ${name}`);
});

ev.emit('welcomeEvent', 'Pietra');
ev.emit('welcomeEvent', 'Maria'); //este evento não será ouvido
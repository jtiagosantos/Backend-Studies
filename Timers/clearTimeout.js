//clearTimeout cancela um timeOut

const timeOut = 3000; //3 segundos
const finished = () => console.log("Done!");

const timer = setTimeout(finished, timeOut); //contexto assíncrono

clearTimeout(timer); //cancela o timeOut timer
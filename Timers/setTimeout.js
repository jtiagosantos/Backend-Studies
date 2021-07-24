//setTimeout roda uma função depois de X milissegundos

const timeOut = 3000; //3 segundos
const finished = () => console.log("Done!");

setTimeout(finished, timeOut); //contexto assíncrono
console.log("Vem primeiro...");
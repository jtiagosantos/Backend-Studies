//clearInterval cancela um setInterval registrado

const timeOut = 1000;
const checking = () => console.log("checking!");

const timer = setInterval(checking, timeOut);

//clearInterval(timer);

setTimeout(() => clearInterval(timer), 4000); //vai cancelar o setInterval de pois de 4 segundos
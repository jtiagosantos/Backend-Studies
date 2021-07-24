//setInterval roda uma função N vezes depois de X milissegundos

const timeOut = 1000;
const checking = () => console.log("checking!");

const timer = setInterval(checking, timeOut);

clearInterval(timer);
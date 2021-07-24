//importação de módulos nativos
const path = require('path');

console.log(path.basename(__filename)); //basename -> nome do arquivo de execução


//importação dos meus módulos
//const myModule = require('./exports.js'); importação do módulo 

const { text, func, techs } = require('./exports.js'); //importação do módulo por desestruturação

console.log(text);

console.log(func());

techs.forEach((tech, index) => console.log(`${index} - ${tech}`));
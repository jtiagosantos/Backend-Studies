const getFlag = require('./exports.js');

const arg = '--name';

if(getFlag(arg)) {
    console.log(getFlag(arg));
}else {
    console.log("No flag!");
}

const firstValueFlag = process.argv[3];
const secondValueFlag = process.argv[5];

console.log(`Olá ${firstValueFlag}, ${secondValueFlag}`);
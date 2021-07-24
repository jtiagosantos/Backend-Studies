console.log(process.argv); //filtra cada processo (argumentos) da linha de comando 

console.log("Your name's " + process.argv[2] + ' ' + process.argv[3]);

//trabalhando com flags

//argumentos: node process --nome "Tiago Santos" --idade "19 anos"

//saída: 
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Usuario\\Documents\\Estudos NodeJs\\Iniciando na prática\\process',
  '--nome', 
  'Tiago Santos',
  '--idade',
  '19 anos'
]
*/

//--nome e --idade são flags
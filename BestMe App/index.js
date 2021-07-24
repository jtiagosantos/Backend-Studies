const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
];

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ");
};

ask();

const answers = [];

//on fica "ouvindo" qualquer entrada de "data" (dado).
//Enquanto tiver "data" a função será chamada.
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    }else {
        process.exit();
    }
});

process.on('exit', () => {
    process.stdout.write("Bacana Tiago!" + "\n\n");

    for(let i = 0; i < 4; i++) {
        process.stdout.write(`${questions[i]}\n${answers[i]}\n\n`);
    }
});
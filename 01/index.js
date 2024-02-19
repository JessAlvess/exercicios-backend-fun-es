const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let acertos = 0, nota = 0
    for (const gabarito of prova.questoes) {
        const test = gabarito.resposta === gabarito.correta ? acertos += 1 : false;
    }
    nota = acertos * 2
    return console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`);
}

corrigirProva(prova)
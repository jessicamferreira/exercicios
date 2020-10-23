/*
    Exercício 3
        - Calcular a média da turma 
        - Imprimir o aluno com a maior Média
*/

const lista = [
    {
        "nome": "José",
        "media": 87
    },
    {
        "nome": "João",
        "media": 65
    },
    {
        "nome": "Maria",
        "media": 88
    },
    {
        "nome": "Sandra",
        "media": 75
    },    
    {
        "nome": "Bento",
        "media": 63
    },
    {
        "nome": "Josefa",
        "media": 78
    },    
];

// Inicializar uma variável para somar as médias
var soma = 0;
var maiorNota = 0;
var nomeAluno = "";
// Percorrer a lista de alunos
for (var notas of lista) {
    soma += notas.media;
    if (notas.media > maiorNota) {
        maiorNota = notas.media; 
        nomeAluno = notas.nome; 
    }
}
console.log(soma); 
console.log(soma/lista.length);
console.log("Maior média é:", maiorNota, nomeAluno);


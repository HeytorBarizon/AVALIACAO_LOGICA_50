// Questão 20 — Dias até o evento
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite quantos dias faltam: "));

if (valor < 0) {
    console.log("Evento encerrado");
} else if (valor === 0) {
    console.log("É hoje");
} else if (valor <= 7) {
    console.log("Esta semana");
} else {
    console.log("Ainda falta");
}

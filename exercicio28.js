// Questão 28 — Pontuação da gincana
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a pontuação: "));

if (valor < 0) {
    console.log("Valor inválido");
} else if (valor < 25) {
    console.log("Iniciante");
} else if (valor < 50) {
    console.log("Intermediário");
} else if (valor < 75) {
    console.log("Avançado");
} else {
    console.log("Especialista");
}

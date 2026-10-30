// Questão 46 — Gincana — nova pontuação
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a pontuação: "));

if (valor < 20) {
    console.log("Iniciante");
} else if (valor < 50) {
    console.log("Intermediário");
} else if (valor < 80) {
    console.log("Avançado");
} else {
    console.log("Especialista");
}

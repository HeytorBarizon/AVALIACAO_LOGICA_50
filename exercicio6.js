// Questão 6 — Nível de ruído
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite os decibéis: "));

if (valor < 40) {
    console.log("Silencioso");
} else if (valor <= 70) {
    console.log("Moderado");
} else {
    console.log("Barulhento");
}

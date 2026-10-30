// Questão 16 — Peças produzidas
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a quantidade de peças produzidas: "));

if (valor < 10) {
    console.log("Abaixo da meta");
} else if (valor < 20) {
    console.log("Meta parcial");
} else if (valor < 30) {
    console.log("Meta atingida");
} else {
    console.log("Meta superada");
}

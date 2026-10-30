// Questão 43 — Campeonato — nova meta
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite os pontos: "));

if (valor >= 100) {
    console.log("Ouro");
} else if (valor >= 80) {
    console.log("Prata");
} else if (valor >= 60) {
    console.log("Bronze");
} else {
    console.log("Participação");
}

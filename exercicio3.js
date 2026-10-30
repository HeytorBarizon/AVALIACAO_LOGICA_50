// Questão 3 — Pontos do campeonato
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite os pontos: "));

if (valor >= 90) {
    console.log("Ouro");
} else if (valor >= 70) {
    console.log("Prata");
} else if (valor >= 50) {
    console.log("Bronze");
} else {
    console.log("Participação");
}

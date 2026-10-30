// Questão 2 — Altura no parque
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a altura em centímetros: "));

if (valor < 100) {
    console.log("Não permitido");
} else if (valor < 140) {
    console.log("Acompanhado");
} else {
    console.log("Liberado");
}

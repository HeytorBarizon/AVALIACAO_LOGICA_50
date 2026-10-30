// Questão 42 — Parque — nova altura
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a altura em centímetros: "));

if (valor < 110) {
    console.log("Não permitido");
} else if (valor < 150) {
    console.log("Acompanhado");
} else {
    console.log("Liberado");
}

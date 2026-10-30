// Questão 5 — Consumo de água
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite o consumo em litros: "));

if (valor < 50) {
    console.log("Baixo");
} else if (valor <= 100) {
    console.log("Moderado");
} else {
    console.log("Alto");
}

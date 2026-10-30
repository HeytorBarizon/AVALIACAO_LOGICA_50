// Questão 7 — Peso da encomenda
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite o peso em kg: "));

if (valor <= 1) {
    console.log("Leve");
} else if (valor <= 5) {
    console.log("Médio");
} else {
    console.log("Pesado");
}

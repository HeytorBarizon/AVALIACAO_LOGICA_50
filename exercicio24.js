// Questão 24 — Preço de estacionamento
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite as horas estacionadas: "));

if (valor <= 0) {
    console.log("Tempo inválido");
} else if (valor <= 1) {
    console.log("R$ 5");
} else if (valor <= 3) {
    console.log("R$ 10");
} else {
    console.log("R$ 20");
}

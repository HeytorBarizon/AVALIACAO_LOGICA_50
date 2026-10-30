// Questão 47 — Estacionamento — nova tabela
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite as horas estacionadas: "));

if (valor <= 0) {
    console.log("Inválido");
} else if (valor <= 2) {
    console.log("R$ 8");
} else if (valor <= 4) {
    console.log("R$ 14");
} else {
    console.log("R$ 25");
}

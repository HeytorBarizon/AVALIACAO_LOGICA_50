// Questão 48 — Reservatório — novos limites
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite o nível do reservatório em %: "));

if (valor < 0 || valor > 100) {
    console.log("Inválido");
} else if (valor < 30) {
    console.log("Crítico");
} else if (valor < 70) {
    console.log("Médio");
} else {
    console.log("Alto");
}

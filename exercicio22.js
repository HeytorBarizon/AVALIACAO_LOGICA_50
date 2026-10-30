// Questão 22 — Produção de energia
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a produção em kWh: "));

if (valor < 0) {
    console.log("Valor inválido");
} else if (valor < 10) {
    console.log("Baixa");
} else if (valor < 30) {
    console.log("Média");
} else {
    console.log("Alta");
}

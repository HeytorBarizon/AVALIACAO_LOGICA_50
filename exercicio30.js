// Questão 30 — Produção de camisetas
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite quantas camisetas foram produzidas: "));

if (valor < 0) {
    console.log("Valor inválido");
} else if (valor < 20) {
    console.log("Início");
} else if (valor < 50) {
    console.log("Em andamento");
} else if (valor < 100) {
    console.log("Quase lá");
} else {
    console.log("Meta concluída");
}

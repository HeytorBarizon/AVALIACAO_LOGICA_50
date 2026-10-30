// Questão 14 — Índice de umidade
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a umidade em %: "));

if (valor < 30) {
    console.log("Muito seco");
} else if (valor < 60) {
    console.log("Adequado");
} else if (valor <= 80) {
    console.log("Úmido");
} else {
    console.log("Muito úmido");
}

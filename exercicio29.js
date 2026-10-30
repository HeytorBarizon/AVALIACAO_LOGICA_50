// Questão 29 — Velocidade de internet
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a velocidade em Mbps: "));

if (valor <= 0) {
    console.log("Sem conexão");
} else if (valor < 20) {
    console.log("Lenta");
} else if (valor < 100) {
    console.log("Regular");
} else {
    console.log("Rápida");
}

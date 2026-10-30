// Questão 41 — Geladeira — nova faixa
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a temperatura em °C: "));

if (valor < -2) {
    console.log("Muito fria");
} else if (valor <= 4) {
    console.log("Ideal");
} else {
    console.log("Quente");
}

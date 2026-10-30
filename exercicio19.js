// Questão 19 — Ocupação do ônibus
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a quantidade de passageiros: "));

if (valor < 0) {
    console.log("Valor inválido");
} else if (valor <= 15) {
    console.log("Vazio");
} else if (valor <= 35) {
    console.log("Moderado");
} else {
    console.log("Lotado");
}

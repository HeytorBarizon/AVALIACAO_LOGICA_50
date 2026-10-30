// Questão 10 — Visitantes do museu
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a quantidade de visitantes: "));

if (valor < 20) {
    console.log("Baixo");
} else if (valor < 60) {
    console.log("Médio");
} else {
    console.log("Alto");
}

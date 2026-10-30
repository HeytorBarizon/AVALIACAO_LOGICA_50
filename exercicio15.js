// Questão 15 — Páginas lidas
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a quantidade de páginas lidas: "));

if (valor < 10) {
    console.log("Início");
} else if (valor < 30) {
    console.log("Em progresso");
} else if (valor < 60) {
    console.log("Muito bem");
} else {
    console.log("Meta superada");
}

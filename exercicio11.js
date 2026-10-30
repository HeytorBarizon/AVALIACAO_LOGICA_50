// Questão 11 — Qualidade do ar
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite o índice de qualidade do ar: "));

if (valor <= 50) {
    console.log("Bom");
} else if (valor <= 100) {
    console.log("Regular");
} else if (valor <= 150) {
    console.log("Ruim");
} else {
    console.log("Muito ruim");
}

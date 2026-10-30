// Questão 18 — Avaliação do restaurante
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite uma nota de 0 a 10: "));

if (valor < 0 || valor > 10) {
    console.log("Nota inválida");
} else if (valor < 6) {
    console.log("Insatisfatório");
} else if (valor < 8) {
    console.log("Bom");
} else {
    console.log("Excelente");
}

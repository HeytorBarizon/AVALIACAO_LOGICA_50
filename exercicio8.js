// Questão 8 — Velocidade da bicicleta
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a velocidade em km/h: "));

if (valor < 10) {
    console.log("Lento");
} else if (valor <= 20) {
    console.log("Moderado");
} else {
    console.log("Rápido");
}

// Questão 44 — Entrega — novos atrasos
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite quantos minutos atrasou: "));

if (valor <= 0) {
    console.log("No prazo");
} else if (valor <= 10) {
    console.log("Pequeno");
} else if (valor <= 30) {
    console.log("Moderado");
} else {
    console.log("Grande");
}

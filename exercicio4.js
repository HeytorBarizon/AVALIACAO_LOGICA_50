// Questão 4 — Tempo de entrega
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite quantos minutos a entrega atrasou: "));

if (valor <= 0) {
    console.log("No prazo");
} else if (valor <= 15) {
    console.log("Atraso pequeno");
} else if (valor <= 40) {
    console.log("Atraso moderado");
} else {
    console.log("Atraso grande");
}

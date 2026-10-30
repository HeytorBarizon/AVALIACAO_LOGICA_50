// Questão 23 — Pontualidade
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a diferença em minutos (negativo = atraso): "));

if (valor < -15) {
    console.log("Muito atrasado");
} else if (valor < 0) {
    console.log("Atrasado");
} else if (valor === 0) {
    console.log("No horário");
} else {
    console.log("Adiantado");
}

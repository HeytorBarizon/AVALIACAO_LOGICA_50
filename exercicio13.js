// Questão 13 — Tempo de atendimento
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite o tempo de espera em minutos: "));

if (valor <= 5) {
    console.log("Rápido");
} else if (valor <= 15) {
    console.log("Normal");
} else if (valor <= 30) {
    console.log("Demorado");
} else {
    console.log("Muito demorado");
}

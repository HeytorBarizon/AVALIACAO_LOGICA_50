// Questão 9 — Tempo de estudo
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite os minutos de estudo: "));

if (valor < 30) {
    console.log("Pouco tempo");
} else if (valor < 60) {
    console.log("Bom início");
} else {
    console.log("Ótima dedicação");
}

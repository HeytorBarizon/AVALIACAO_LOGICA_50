// Questão 25 — Temperatura do forno
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a temperatura do forno: "));

if (valor < 100) {
    console.log("Muito baixo");
} else if (valor <= 179) {
    console.log("Aquecendo");
} else if (valor <= 220) {
    console.log("Ideal");
} else {
    console.log("Muito quente");
}

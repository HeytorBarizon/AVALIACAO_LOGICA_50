// Questão 1 — Temperatura da geladeira
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a temperatura em °C: "));

if (valor < 0) {
    console.log("Congelando");
} else if (valor <= 5) {
    console.log("Ideal");
} else {
    console.log("Verificar refrigeração");
}

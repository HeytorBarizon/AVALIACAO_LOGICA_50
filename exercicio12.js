// Questão 12 — Carga da mochila
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite o peso da mochila em kg: "));

if (valor < 3) {
    console.log("Leve");
} else if (valor <= 6) {
    console.log("Atenção");
} else {
    console.log("Muito pesada");
}

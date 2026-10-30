// Questão 45 — Mochila — novos limites
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite o peso da mochila em kg: "));

if (valor <= 2) {
    console.log("Leve");
} else if (valor <= 5) {
    console.log("Atenção");
} else {
    console.log("Pesada");
}

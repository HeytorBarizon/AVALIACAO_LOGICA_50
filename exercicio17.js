// Questão 17 — Distância da caminhada
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite os quilômetros percorridos: "));

if (valor < 2) {
    console.log("Curta");
} else if (valor < 5) {
    console.log("Média");
} else if (valor < 10) {
    console.log("Longa");
} else {
    console.log("Muito longa");
}

// Questão 27 — Volume do reservatório
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite o nível do reservatório em %: "));

if (valor < 0 || valor > 100) {
    console.log("Valor inválido");
} else if (valor < 20) {
    console.log("Crítico");
} else if (valor < 50) {
    console.log("Baixo");
} else if (valor < 80) {
    console.log("Médio");
} else {
    console.log("Alto");
}

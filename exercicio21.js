// Questão 21 — Estoque de sementes
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a quantidade de pacotes: "));

if (valor <= 0) {
    console.log("Sem estoque");
} else if (valor <= 4) {
    console.log("Crítico");
} else if (valor <= 14) {
    console.log("Baixo");
} else {
    console.log("Suficiente");
}

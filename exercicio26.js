// Questão 26 — Idade da árvore
const prompt = require("prompt-sync")();

const valor = Number(prompt("Digite a idade da árvore em anos: "));

if (valor < 0) {
    console.log("Idade inválida");
} else if (valor <= 2) {
    console.log("Muda");
} else if (valor <= 9) {
    console.log("Jovem");
} else {
    console.log("Adulta");
}

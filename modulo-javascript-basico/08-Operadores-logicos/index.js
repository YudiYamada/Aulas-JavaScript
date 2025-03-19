console.log(true && true); // true
console.log(true && false); // false

console.log(true || false); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

let valor = null;
console.log(valor ?? 'Padrão'); // "Padrão"

console.log(false && true); // false (para na primeira condição)
console.log(true || false); // true (para na primeira condição)

const idade = 25;
const temPermissao = true;

if (idade >= 18 && temPermissao) {
  console.log("Acesso liberado!");
} else {
  console.log("Acesso negado.");
}
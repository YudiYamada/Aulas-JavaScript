// Exercícios

// 1) Crie um array de números e use `filter` para gerar um novo array contendo apenas os números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares);

// 2) Dado um array de strings, filtre aquelas que possuem mais de 5 caracteres.

const frutas = [
  "maçã",
  "banana",
  "laranja",
  "uva",
  "abacaxi",
  "melancia",
  "morango",
  "kiwi",
  "manga",
  "pêra",
];

const maisDe5Caracteres = frutas.filter((cincoCaracteres) => cincoCaracteres.length >= 5)
console.log(maisDe5Caracteres)

// 3) Dado um array de objetos representando pessoas (com propriedades como `nome` e `idade`), filtre apenas aquelas com idade maior ou igual a 18 anos.

const pessoas = [
  { nome: "Alice", idade: 15 },
  { nome: "Bruno", idade: 16 },
  { nome: "Camila", idade: 17 },
  { nome: "Diego", idade: 18 },
  { nome: "Eva", idade: 19 }
];

const maiorDeDezoito = pessoas.filter((maiorDezoito) => maiorDezoito.idade >= 18)
console.log(maiorDeDezoito)

//4) Imagine que você tem um array de objetos representando produtos de uma loja, onde cada produto possui propriedades como `nome` e `quantidade`. Use `filter` para criar um novo array contendo apenas os produtos com `quantidade > 0`.

const produtos = [
  { nome: "Camiseta", quantidade: 15 },
  { nome: "Calça Jeans", quantidade: 8 },
  { nome: "Tênis", quantidade: 0 },
  { nome: "Mochila", quantidade: 5 },
  { nome: "Relógio", quantidade: 0 }
];

const foraDeEstoque = produtos.filter((foraDeEstoque) => foraDeEstoque.quantidade === 0)
console.log(foraDeEstoque)

// 5) Dado um array de palavras, filtre aquelas que começam com a letra "T" (ou qualquer outra letra que você escolher).

const palavras = ["sol", "lua", "estrela", "mar", "terra"];
const t = palavras.filter((letraT) => letraT.startsWith("t") || letraT.startsWith("T"))
console.log(t)
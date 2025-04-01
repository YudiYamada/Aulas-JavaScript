// 1. Transformação básica de array: Dado o array:
const numeros = [1, 2, 3, 4, 5];
// Utilize o método map para criar um novo array chamado quadrados onde cada elemento seja o quadrado dos números originais.
const quadrados = numeros.map((quadrados) => quadrados * 2)
console.log(`Resposta da 1ª questão [${quadrados}]`)


// 2. Manipulação de strings: Dado o array:
const palavras = ["javascript", "map", "função", "array"];
//Use o método map para criar um novo array chamado palavrasMaiusculas onde cada palavra esteja em letras maiúsculas.
const palavrasMaiusculas = palavras.map((palavrasMaiusculas) => palavrasMaiusculas.toLocaleUpperCase())
console.log(`Resposta da 2ª questão [${palavrasMaiusculas}]`)


// 3. Transformação de objetos: Considere o array de objetos:
const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Sapato", preco: 200 }
];
//Use o método map para criar um novo array chamado descontos onde o preço de cada produto seja reduzido em 20%.
const descontos = produtos.map(produto => {
  return { 
    nome: produto.nome, 
    preco: produto.preco * 0.8
  };
});
console.log(descontos)


// 4. Extração de dados: Dado o array:
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 30 },
  { nome: "Clara", idade: 35 }
];
// Com o método map, crie um novo array chamado nomes que contenha apenas os nomes dos usuários.
const nomes = usuarios.map((nomes) => nomes.nome)
console.log(`Resposta da 4ª questão [${nomes}]`)


// 5. Função com o método map: Crie uma função chamada adicionarPrefixo que receba um array de strings e um prefixo como argumentos e retorne um novo array onde cada elemento do array original tenha o prefixo adicionado.
function adicionarPrefixo(array, prefixo) {
  return array.map(elemento => prefixo + elemento);
}

const cidades = ["Belém", "Bragança", "Paragominas"];
const resultado = adicionarPrefixo(cidades, "Cidade: ");

console.log(resultado);

// 1. Soma de valores:
// Dado o array:  
const numeros = [10, 20, 30, 40, 50];
// Use o método reduce para calcular a soma de todos os números no array. O resultado deve ser 150.
const soma = numeros.reduce((numero, numeros) => numero + numeros)
console.log(`Respota da 1ª Quesrão é ${soma}`)


// 2. Concatenar strings:
// Dado o array:  
const palavras = ["JavaScript", "é", "muito", "legal!"];
// Use o método reduce para criar uma única string a partir das palavras no array. A saída deve ser: JavaScript é muito legal!.
const unicaString = palavras.reduce((unicaString, palavras) => unicaString + " " + palavras)
console.log(`Respota da 2ª Quesrão é ${unicaString}`)


// 3. Produto de valores:
// Dado o array:  
const outrosNumeros = [2, 3, 4];
// Use o método reduce para calcular o resultado da multiplicação de todos os números. O resultado deve ser 24.
const multiplicacao = outrosNumeros.reduce((resultado, outrosNumeros) => resultado * outrosNumeros)
console.log(`Respota da 3ª Quesrão é ${multiplicacao}`)



// 4. Encontrar o maior valor:
// Dado o array:  
const valores = [15, 42, 88, 21, 7];
// Utilize o método reduce para determinar o maior valor no array. A saída deve ser 88.
const maiorValor = valores.reduce((maior, valores) => maior > valores ? maior : valores)
console.log(`Respota da 4ª Quesrão é ${maiorValor}`)


// 5. Contagem de ocorrências:
// Dado o array:  
const letras = ["a", "b", "a", "c", "b", "a"];
// Use o método reduce para contar quantas vezes cada letra aparece e crie um objeto com essa contagem. O resultado deve ser: { a: 3, b: 2, c: 1 }
const contagem = letras.reduce((contador, letra) => {
  contador[letra] = (contador[letra] || 0) + 1;
  return contador;
}, {});

console.log(contagem);